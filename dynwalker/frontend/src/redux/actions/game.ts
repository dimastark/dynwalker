export enum GameActions {
    PLAY_GAME = 'PLAY_GAME',
    PLAY_GAME_SUCCESS = 'PLAY_GAME_SUCCESS',
    STOP_GAME = 'STOP_GAME',
    STOP_GAME_SUCCESS = 'STOP_GAME_SUCCESS',
    SET_POPULATION = 'SET_POPULATION',
    EVOLVE = 'EVOLVE',
    EVOLVE_SUCCESS = 'EVOLVE_SUCCESS'
}

export type PlayGameAction = {
    type: GameActions.PLAY_GAME
};

export function playGame(): PlayGameAction {
    return {
        type: GameActions.PLAY_GAME
    };
}

export type PlayGameSuccessAction = {
    type: GameActions.PLAY_GAME_SUCCESS
};

export function playGameSuccess(): PlayGameSuccessAction {
    return {
        type: GameActions.PLAY_GAME_SUCCESS
    };
}

export type StopGameAction = {
    type: GameActions.STOP_GAME
};

export function stopGame(): StopGameAction {
    return {
        type: GameActions.STOP_GAME
    };
}

export type StopGameSuccessAction = {
    type: GameActions.STOP_GAME_SUCCESS
};

export function stopGameSuccess(): StopGameSuccessAction {
    return {
        type: GameActions.STOP_GAME_SUCCESS
    };
}

export type SetPopulationAction = {
    type: GameActions.SET_POPULATION,
    payload: string
};

export function setPopulation(value: string): SetPopulationAction {
    return {
        type: GameActions.SET_POPULATION,
        payload: value
    };
}

export type EvolveAction = {
    type: GameActions.EVOLVE
};

export function evolve(): EvolveAction {
    return {
        type: GameActions.EVOLVE
    };
}

export type EvolveSuccessAction = {
    type: GameActions.EVOLVE_SUCCESS
};

export function evolveSuccess(): EvolveSuccessAction {
    return {
        type: GameActions.EVOLVE_SUCCESS
    };
}

export type GameAction = PlayGameAction | PlayGameSuccessAction |
    StopGameAction | StopGameSuccessAction | SetPopulationAction |
    EvolveAction | EvolveSuccessAction | { type: '' };
