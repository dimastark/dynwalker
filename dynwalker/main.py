from dynwalker.env import MazeEnv

env = MazeEnv()
env.reset()

for _ in range(1000):
    env.render()

    action = env.action_space.sample()
    env.step(action)
