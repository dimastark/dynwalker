import { Species } from '../services/api/area';
import { StatsAction, StatsActions } from '../actions/stats';

export interface StatsState {
    isPending: boolean,
    description: string | null,
    populations: {
        species: Species[],
        fitness: { [species in Species]: number }[]
    }
}

const defaultState: StatsState = {
    isPending: false,
    description: null,
    populations: {
        species: [],
        fitness: []
    }
};

export default function statsReducer(state: StatsState = defaultState, action: StatsAction): StatsState {
    switch (action.type) {
        case StatsActions.REQUEST_STATS:
            return {
                ...state,
                isPending: true
            };

        case StatsActions.RECEIVE_STATS:
            return {
                ...state,
                ...action.stats,
                isPending: false
            };

        default:
            return state;
    }
}
