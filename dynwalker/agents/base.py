import abc
import itertools


class Agent(abc.ABC):
    _ids = itertools.count(1)

    def __init__(self):
        self._env = None
        self._id = next(self._ids)

    @property
    def env(self):
        return self._env

    @env.setter
    def env(self, env):
        self._env = env

    @property
    def id(self):
        return self._id

    @abc.abstractmethod
    def step(self, action):
        pass

    @abc.abstractmethod
    def reset(self):
        pass

    @abc.abstractmethod
    def get_observation(self, env_observation):
        pass


class GoalAgent(Agent):
    @abc.abstractmethod
    def compute_reward(self, achieved_goal, desired_goal, info):
        pass
