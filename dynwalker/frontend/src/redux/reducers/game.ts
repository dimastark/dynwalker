import { GameAction, GameActions } from '../actions/game';
import isIntegerNumber from '../../utils/isIntegerNumber';

export interface GameState {
    isPending: boolean,
    population: string
}

const defaultState: GameState = {
    isPending: false,
    population: ''
};

export default function gameReducer(state: GameState = defaultState, action: GameAction): GameState {
    switch (action.type) {
        case GameActions.PLAY_GAME:
            return {
                ...state,
                isPending: true
            };

        case GameActions.PLAY_GAME_SUCCESS:
            return {
                ...state,
                isPending: false
            };
        case GameActions.STOP_GAME:
            return {
                ...state,
                isPending: true
            };

        case GameActions.STOP_GAME_SUCCESS:
            return {
                ...state,
                isPending: false
            };
        case GameActions.SET_POPULATION:
            return {
                ...state,
                population: action.payload
            };

        default:
            return state;
    }
}
