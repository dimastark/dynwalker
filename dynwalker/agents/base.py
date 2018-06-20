import abc
import random

from collections import deque

import numpy as np

from gym import spaces

from dynwalker import conf


class Agent(abc.ABC):
    @abc.abstractmethod
    def act(self, observation):
        pass

    @abc.abstractmethod
    def step(self, action):
        pass

    @abc.abstractmethod
    def reset(self):
        pass


class MazeMixin(abc.ABC):
    def __init__(self, *args, default_position=None, **kwargs):
        super().__init__(*args, **kwargs)

        self.action_space = spaces.Discrete(4)
        self.default_position = default_position
        self.position = default_position
        self.visited = set()

    def step_in_maze(self, action):
        new_position = list(self.position)

        if action == 0:
            new_position[1] -= 1
        if action == 1:
            new_position[0] += 1
        if action == 2:
            new_position[1] += 1
        if action == 3:
            new_position[0] -= 1

        reward = -0.6 if tuple(new_position) in self.visited else -0.5
        info = {'previous_position': self.position}

        self.position = new_position
        self.visited.add(tuple(self.position))

        return self.position, reward, info

    def reset_position(self):
        self.position = self.default_position

        return self.default_position


class ModelDrivenMixin(abc.ABC):
    def __init__(self, *args, state_size=conf.STATE_SIZE, value=None, **kwargs):
        super().__init__(*args, **kwargs)

        self.value = value
        self.state_size = state_size
        self.epsilon = conf.EXPLORATION_RATE
        self.memory = deque(maxlen=conf.AGENT_MEMORY_SIZE)
        self.model = self.build_model()
        self.model_snapshot = self.build_model()

        self.make_model_snapshot()

    @abc.abstractmethod
    def build_model(self):
        pass

    def make_model_snapshot(self):
        self.model_snapshot.set_weights(self.model.get_weights())

    def predict_act(self, observation):
        act_values = self.model.predict_act(observation)

        return np.argmax(act_values[0])

    def remember(self, observation, action, reward, next_observation, done):
        observation = np.reshape(observation.field, [1, self.state_size])
        next_observation = np.reshape(next_observation.field, [1, self.state_size])

        self.memory.append((observation, action, reward, next_observation, done))

    def replay(self):
        mini_batch = random.sample(self.memory, conf.BATCH_SIZE)

        for observation, action, reward, next_observation, done in mini_batch:
            prediction = self.model.predict(observation)

            if done:
                prediction[0][action] = reward
            else:
                best_choice = np.amax(self.model_snapshot.predict(next_observation)[0])
                prediction[0][action] = reward + conf.DISCOUNT_RATE * best_choice

            self.model.fit(observation, prediction, epochs=conf.EPOCHS, verbose=conf.VERBOSE)

        if self.epsilon > conf.EPSILON:
            self.epsilon *= conf.EPSILON_DECAY

    def load(self, name):
        self.model.load_weights(name)

    def save(self, name):
        self.model.save_weights(name)
