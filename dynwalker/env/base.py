import abc

import gym

from ..agents import Agent, GoalAgent


class MultiAgentEnv(gym.Env, metaclass=abc.ABCMeta):
    def __init__(self, agents=None):
        self.agents = agents or []

        assert all([isinstance(agent, Agent) for agent in self.agents])

        for agent in self.agents:
            agent.env = self

    def reset(self):
        for agent in self.agents:
            agent.reset()

        return self.get_agents_observations()

    def step(self, actions):
        assert len(self.agents) == len(actions)

        rewards, dones, infos = [], [], []

        for agent, action in zip(self.agents, actions):
            observation, reward, done, info = agent.step(action)

            rewards.append(reward)
            dones.append(done)
            infos.append(info)

        return self.get_agents_observations(), rewards, self.get_done(dones), infos

    def get_agents_observations(self):
        observation = self.get_observation()

        return [agent.get_observation(observation) for agent in self.agents]

    @abc.abstractmethod
    def render(self, mode='human'):
        pass

    @abc.abstractmethod
    def get_observation(self):
        pass

    @abc.abstractmethod
    def get_done(self, agent_dones):
        pass


class MultiAgentGoalEnv(MultiAgentEnv, gym.GoalEnv, metaclass=abc.ABCMeta):
    def __init__(self, agents=None):
        super(MultiAgentGoalEnv, self).__init__(agents)

        assert all([isinstance(agent, GoalAgent) for agent in self.agents])

    def compute_reward(self, achieved_goals, desired_goals, infos):
        return [
            agent.compute_reward(achieved_goal, desired_goal, info)
            for agent, achieved_goal, desired_goal, info in zip(self.agents, achieved_goals, desired_goals, infos)
        ]
