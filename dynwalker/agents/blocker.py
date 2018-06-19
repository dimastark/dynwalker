from .base import GoalAgent


class BlockerAgent(GoalAgent):
    def compute_reward(self, achieved_goal, desired_goal, info):
        raise NotImplementedError()

    def step(self, action):
        raise NotImplementedError()

    def reset(self):
        raise NotImplementedError()

    def get_observation(self, env_observation):
        raise NotImplementedError()
