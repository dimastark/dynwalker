import random

from .. import conf
from ..agents import MazeMixin
from ..utils import Maze
from .rendering import MazeScene
from .base import MultiAgentEnv


class MazeEnv(MultiAgentEnv):
    metadata = {'render.modes': ['ansi', 'human']}

    def __init__(self, agents=None):
        super().__init__(agents)

        assert all([isinstance(agent, MazeMixin) for agent in self.agents])

        self.maze = None
        self.random = None
        self.scene = None

        self.seed()

    def seed(self, seed=None):
        if not self.random:
            self.random = random.Random()

        generator_seed = seed or conf.DEFAULT_SEED
        self.random.seed(generator_seed)

        return [generator_seed]

    def reset(self):
        if conf.REGENERATE_MAZE or not self.maze:
            self.maze = Maze.new(conf.DEFAULT_MAZE_SIZE, self.random)

        for agent in self.agents:
            x, y = agent.position
            self.maze.field[x, y] = conf.EMPTY
        self.maze.field[conf.TARGET_POSITION[0], conf.TARGET_POSITION[1]] = conf.TARGET

        if self.scene:
            self.scene.reset()

        return super().reset()

    def step(self, actions):
        observation, rewards, done, infos = super().step(actions)

        for agent, info in zip(self.agents, infos):
            x, y = agent.position
            self.maze.field[x, y] = agent.value
            x, y = info['previous_position']
            self.maze.field[x, y] = conf.EMPTY

        if all([agent.score < conf.MIN_SCORE for agent in self.agents]):
            return observation, rewards, True, infos

        return observation, rewards, done, infos

    def render(self, mode='human'):
        assert self.maze

        if not self.scene and mode == 'human':
            self.scene = MazeScene()

        if mode == 'human':
            self.scene.render(self.maze.field)
        elif mode == 'ansi':
            return str(self.maze)

    def get_observation(self):
        return self.maze

    def get_done(self, agent_dones):
        return any(agent_dones)

    def close(self):
        if self.scene:
            self.scene.exit()
