import random

import numpy as np

from tensorflow.python.keras.layers import Dense
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.optimizers import Adam

from dynwalker import conf
from ..utils.loss import huber_loss
from .base import Agent, MazeMixin, ModelDrivenMixin


class BlockerAgent(ModelDrivenMixin, MazeMixin, Agent):
    def __init__(self):
        super().__init__(
            value=conf.BLOCKER,
            default_position=conf.BLOCKER_POSITION,
        )

        self.observation = None
        self.score = 0

    def act(self, observation):
        self.observation = observation

        possible_acts = []

        if observation.field[self.position[0], self.position[1] - 1] not in [conf.TARGET, conf.STATIC]:
            possible_acts.append(0)

        if observation.field[self.position[0] + 1, self.position[1]] not in [conf.TARGET, conf.STATIC]:
            possible_acts.append(1)

        if observation.field[self.position[0], self.position[1] + 1] not in [conf.TARGET, conf.STATIC]:
            possible_acts.append(2)

        if observation.field[self.position[0] - 1, self.position[1]] not in [conf.TARGET, conf.STATIC]:
            possible_acts.append(3)

        prediction = self.model.predict(np.reshape(observation.field, [1, self.state_size]))
        act = np.argmax(prediction[0])

        if act in possible_acts:
            return act

        return random.choice(possible_acts)

    def step(self, action):
        position, reward, info = super().step_in_maze(action)
        info['position'] = position

        if self.observation.field[position[0], position[1]] == conf.WALKER:
            info['walker_acquired'] = True
            return 1, True, info

        if self.observation.field[position[0], position[1]] != conf.EMPTY:
            info['failure'] = True
            return -1, True, info

        return reward, False, info

    def reset(self):
        self.score = 0
        return self.reset_position()

    def build_model(self):
        model = Sequential()

        model.add(Dense(24, input_dim=conf.STATE_SIZE, activation='relu'))
        model.add(Dense(24, activation='relu'))
        model.add(Dense(self.action_space.n, activation='linear'))

        model.compile(loss=huber_loss, optimizer=Adam(lr=conf.LEARNING_RATE))

        return model
