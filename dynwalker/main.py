from gym.envs.classic_control import CartPoleEnv

env = CartPoleEnv()
env.reset()

for _ in range(1000):
    env.render()

    action = env.action_space.sample()
    env.step(action)
