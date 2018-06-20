import abc

import gym

from dynwalker import conf
from ..agents import Agent


class MultiAgentEnv(gym.Env, metaclass=abc.ABCMeta):
    def __init__(self, agents=None):
        self.agents = agents or []

        assert all([isinstance(agent, Agent) for agent in self.agents])

    def reset(self):
        for agent in self.agents:
            agent.reset()

        return self.get_observation()

    def step(self, actions):
        assert len(self.agents) == len(actions)

        rewards, dones, infos = [], [], []

        for agent, action in zip(self.agents, actions):
            reward, done, info = agent.step(action)

            info['done'] = done

            rewards.append(reward)
            dones.append(done)
            infos.append(info)

        return self.get_observation(), rewards, self.get_done(dones), infos

    def update_target_models(self):
        for agent in self.agents:
            agent.make_model_snapshot()

    def remind_all(self):
        for agent in self.agents:
            if len(agent.memory) > conf.BATCH_SIZE:
                agent.replay()

    @abc.abstractmethod
    def render(self, mode='human'):
        pass

    @abc.abstractmethod
    def get_observation(self):
        pass

    @abc.abstractmethod
    def get_done(self, agent_dones):
        pass
