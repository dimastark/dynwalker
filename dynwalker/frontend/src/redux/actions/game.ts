export enum GameActions {
    PLAY_GAME = 'PLAY_GAME',
    PLAY_GAME_SUCCESS = 'PLAY_GAME_SUCCESS',
    STOP_GAME = 'STOP_GAME',
    STOP_GAME_SUCCESS = 'STOP_GAME_SUCCESS',
    SET_POPULATION = 'SET_POPULATION',
    EVOLVE = 'EVOLVE',
    EVOLVE_SUCCESS = 'EVOLVE_SUCCESS',
    EXPORT_BRAIN = 'EXPORT_ BRAIN',
    EXPORT_BRAIN_SUCCESS = 'EXPORT_BRAIN_SUCCESS',
    IMPORT_BRAIN = 'IMPORT_BRAIN',
    IMPORT_BRAIN_SUCCESS = 'IMPORT_BRAIN_SUCCESS',
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
    type: GameActions.EVOLVE,
    payload: {
        populationCount: number
    }
};

export function evolve(populationCount: number): EvolveAction {
    return {
        type: GameActions.EVOLVE,
        payload: {
            populationCount
        }

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

export type ImportBrainAction = {
    type: GameActions.IMPORT_BRAIN
};

export function importBrain(): ImportBrainAction {
    return {
        type: GameActions.IMPORT_BRAIN
    };
}

export type ImportBrainSuccessAction = {
    type: GameActions.IMPORT_BRAIN_SUCCESS
};

export function importBrainSuccess(): ImportBrainSuccessAction {
    return {
        type: GameActions.IMPORT_BRAIN_SUCCESS
    };
}

export type ExportBrainAction = {
    type: GameActions.EXPORT_BRAIN
};

export function exportBrain(): ExportBrainAction {
    return {
        type: GameActions.EXPORT_BRAIN
    };
}

export type ExportBrainSuccessAction = {
    type: GameActions.EXPORT_BRAIN_SUCCESS
};

export function exportBrainSuccess(): ExportBrainSuccessAction {
    return {
        type: GameActions.EXPORT_BRAIN_SUCCESS
    };
}


export type GameAction = PlayGameAction | PlayGameSuccessAction |
    StopGameAction | StopGameSuccessAction | SetPopulationAction |
    EvolveAction | EvolveSuccessAction | ExportBrainAction |
    ExportBrainSuccessAction | ImportBrainAction | ImportBrainSuccessAction |
    { type: '' };
