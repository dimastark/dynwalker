from dynwalker import conf
from dynwalker.agents import BlockerAgent, WalkerAgent
from dynwalker.env import MazeEnv

env = MazeEnv(agents=[
    BlockerAgent(),
    WalkerAgent()
])

for episode in range(conf.EPISODES_COUNT):
    observation = env.reset()

    for time in range(conf.STEPS_COUNT):
        env.render()

        actions = [agent.act(observation) for agent in env.agents]

        next_observation, rewards, done, infos = env.step(actions)

        for agent, action, reward, info in zip(env.agents, actions, rewards, infos):
            agent.score += reward
            agent.remember(observation, action, reward, next_observation, info['done'])

        observation = next_observation

        if done:
            env.update_target_models()
            print(f'episode {episode}/{conf.EPISODES_COUNT}:')

            for agent in env.agents:
                print(f'\tscore: {agent.score}, e: {agent.epsilon}')

            break

        env.remind_all()
