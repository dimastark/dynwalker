import random

from .. import conf
from ..utils import Maze
from .rendering import MazeScene
from .base import MultiAgentGoalEnv


class MazeEnv(MultiAgentGoalEnv):
    metadata = {'render.modes': ['ansi', 'human']}

    def __init__(self, agents=None):
        super().__init__(agents)

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
        self.maze = Maze.new(conf.DEFAULT_MAZE_SIZE, self.random)

        if self.scene:
            self.scene.reset()

        return super().reset()

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
