import random

import numpy as np

from tensorflow.python.keras.layers import Dense
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.optimizers import Adam

from dynwalker import conf
from ..utils.loss import huber_loss
from .base import Agent, MazeMixin, ModelDrivenMixin


class WalkerAgent(ModelDrivenMixin, MazeMixin, Agent):
    def __init__(self):
        super().__init__(
            value=conf.WALKER,
            default_position=conf.WALKER_POSITION,
        )

        self.observation = None
        self.score = 0
        self.min_dir = 2 * conf.DEFAULT_MAZE_SIZE

    def act(self, observation):
        self.observation = observation

        possible_acts = []

        if observation.field[self.position[0], self.position[1] - 1] not in [conf.BLOCKER, conf.STATIC]:
            possible_acts.append(0)

        if observation.field[self.position[0] + 1, self.position[1]] not in [conf.BLOCKER, conf.STATIC]:
            possible_acts.append(1)

        if observation.field[self.position[0], self.position[1] + 1] not in [conf.BLOCKER, conf.STATIC]:
            possible_acts.append(2)

        if observation.field[self.position[0] - 1, self.position[1]] not in [conf.BLOCKER, conf.STATIC]:
            possible_acts.append(3)

        prediction = self.model.predict(np.reshape(observation.field, [1, self.state_size]))
        act = np.argmax(prediction[0])

        if act in possible_acts:
            return act

        return random.choice(possible_acts)

    def step(self, action):
        position, reward, info = super().step_in_maze(action)
        info['position'] = position

        if self.observation.field[position[0], position[1]] == conf.TARGET:
            info['target_acquired'] = True
            return 1, True, info

        if self.observation.field[position[0], position[1]] != conf.EMPTY:
            info['failure'] = True
            return -1, True, info

        new_dst = abs(conf.TARGET_POSITION[0] - self.position[0]) + abs(conf.TARGET_POSITION[1] - self.position[1])
        if new_dst < self.min_dir:
            self.min_dir = new_dst
            reward += 0.5

        return reward, False, info

    def reset(self):
        self.score = 0
        self.min_dir = 2 * conf.DEFAULT_MAZE_SIZE
        return self.reset_position()

    def build_model(self):
        model = Sequential()

        model.add(Dense(24, input_dim=conf.STATE_SIZE, activation='relu'))
        model.add(Dense(24, activation='relu'))
        model.add(Dense(self.action_space.n, activation='linear'))

        model.compile(loss=huber_loss, optimizer=Adam(lr=conf.LEARNING_RATE))

        return model
