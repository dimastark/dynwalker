import tkinter as tk

from dynwalker import conf


class MazeScene:
    def __init__(self):
        self.master = tk.Tk()
        self.master.title(conf.WINDOW_TITLE)

        self.canvas = SceneCanvas(self.master)

    def render(self, model):
        self.canvas.render(model)
        self.master.update()
        self.master.update_idletasks()

    def reset(self):
        self.canvas.reset()

    def exit(self):
        self.master.exit()


class SceneCanvas(tk.Canvas):
    def __init__(self, master):
        super().__init__(
            master=master,
            width=conf.SCENE_WIDTH,
            height=conf.SCENE_HEIGHT,
            background=conf.SCENE_BACKGROUND,
            borderwidth=0,
            highlightthickness=0,
        )

        self.pack()

    def render_cell(self, x, y, value):
        self.create_rectangle(
            conf.SCENE_CELL_SIZE * x,
            conf.SCENE_CELL_SIZE * y,
            conf.SCENE_CELL_SIZE * (x + 1),
            conf.SCENE_CELL_SIZE * (y + 1),
            fill=conf.SCENE_COLORS_DICT[value],
        )

    def render(self, model):
        self.reset()

        for y in range(len(model)):
            for x in range(len(model[0])):
                self.render_cell(x, y, model[x][y])

    def reset(self):
        self.delete('all')
