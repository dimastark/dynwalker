import random


def _shuffled_directions(rnd=None):
    directions = [
        (0, -1),
        (0, 1),
        (1, 0),
        (-1, 0),
    ]

    if rnd:
        rnd.shuffle(directions)
    else:
        random.shuffle(directions)

    return directions


class _Field(list):
    def __init__(self, real_size, cell_size, empty_mark, wall_mark):
        super().__init__([wall_mark for _ in range(real_size * real_size)])

        self.real_size = real_size
        self.cell_size = cell_size
        self.size = int((real_size - 1) // (cell_size + 1))
        self.empty = empty_mark
        self.wall = wall_mark

    def get_boundaries(self, dx, dy):
        if dx > 0:
            return -1, self.real_size

        if dx < 0:
            return self.cell_size, self.real_size

        if dy > 0:
            return -self.real_size, 1

        return self.cell_size * self.real_size, 1

    def has_coordinate(self, x, y):
        return 0 <= x < self.size and 0 <= y < self.size

    def get_index(self, x, y):
        field_x = (self.cell_size + 1) * x + 1
        field_y = (self.cell_size + 1) * y + 1

        return field_x + field_y * self.real_size

    def get(self, x, y):
        return self[self.get_index(x, y)]

    def set_empty(self, x, y, dx, dy):
        index = self.get_index(x, y)
        a, b = self.get_boundaries(dx, dy)

        for offset in range(self.cell_size):
            self[index + a + b * offset] = self.empty

        for y in range(self.cell_size):
            for x in range(self.cell_size):
                self[index + x + y * self.real_size] = self.empty


def generate_maze_field(field_size, cell_size, empty_mark, wall_mark, rnd=None):
    field = _Field(field_size, cell_size, empty_mark, wall_mark)

    stack = [(0, 0, _shuffled_directions(rnd))]

    while stack:
        x, y, directions = stack.pop()

        for dx, dy in directions:
            new_x = x + dx
            new_y = y + dy

            if not field.has_coordinate(new_x, new_y) or not field.get(new_x, new_y):
                continue

            field.set_empty(new_x, new_y, dx, dy)

            stack.append([new_x, new_y, _shuffled_directions(rnd)])

    return field
