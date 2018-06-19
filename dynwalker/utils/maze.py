import numpy as np

from dynwalker import conf
from .maze_gen import generate_maze_field


class Maze:
    def __init__(self, size):
        self.size = size
        self.field = np.zeros(shape=(size, size))

    def __str__(self):
        return '\n'.join([
            ''.join([
                conf.WALKER_LABEL_DICT[item] for item in row
            ]) for row in self.field
        ])

    def _fill(self, array):
        self.field = np.reshape(array, (self.size, self.size))

    @staticmethod
    def new(field_size, rnd=None):
        maze = Maze(field_size)
        maze._fill(generate_maze_field(
            field_size,
            cell_size=conf.DEFAULT_CELL_SIZE,
            empty_mark=conf.EMPTY,
            wall_mark=conf.STATIC,
            rnd=rnd,
        ))

        return maze
