import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
    GameActions,
    playGameSuccess,
    stopGameSuccess,
    evolveSuccess,
    EvolveAction,
    importBrainSuccess,
    exportBrainSuccess
} from '../actions/game';
import API from '../services/api';

function * playGame() {
    yield call(API.game.play);
    yield put(playGameSuccess());
}

function * stopGame() {
    yield call(API.game.stop);
    yield put(stopGameSuccess());
}

function * evolveGame({ payload }: EvolveAction) {
    yield call(API.game.evolve, payload.populationCount);
    yield put(evolveSuccess());
}

function * importGame() {
    yield call(API.game.importBrain);
    yield put(importBrainSuccess());
}

function * exportGame() {
    yield call(API.game.exportBrain);
    yield put(exportBrainSuccess());
}

export default function * watchArea() {
    yield all([
        takeLatest(GameActions.PLAY_GAME, playGame),
        takeLatest(GameActions.STOP_GAME, stopGame),
        takeLatest(GameActions.EVOLVE, evolveGame),
        takeLatest(GameActions.IMPORT_BRAIN, importGame),
        takeLatest(GameActions.EXPORT_BRAIN, exportGame)
    ]);
}
