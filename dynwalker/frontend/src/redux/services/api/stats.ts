import request from '../request';

import { Species } from './area';

export interface Stats {
    description: string,
    populations: {
        species: Species[],
        fitness: { [species in Species]: number }[]
    }
}

export default {
    get(): Promise<Stats> {
        return request('stats');
    }
}
