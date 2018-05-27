import request from '../request';



export default {
    play(): Promise<void> {
        return request<void>('game/play', { method: 'post' });
    },

    stop(): Promise<void> {
        return request<void>('game/stop', { method: 'post' });
    },

    evolve(populationCount: number): Promise<void> {
        return request<void>('game/evolve', {
            method: 'post',
            body: JSON.stringify({
                population_count: populationCount
            })
        });
    }
}
