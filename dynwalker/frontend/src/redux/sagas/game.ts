import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GameActions, playGameSuccess, stopGameSuccess, evolveSuccess, evolve } from '../actions/game';
import API from '../services/api';

function * playGame() {
    yield call(API.game.play);
    yield put(playGameSuccess());
}

function * stopGame() {
    yield call(API.game.stop);
    yield put(stopGameSuccess());
}

function * evolveGame(action: ReturnType<evolve>) {
    yield call(API.game.evolve, evolve);
    yield put(evolveSuccess());
}

export default function * watchArea() {
    yield all([
        takeLatest(GameActions.PLAY_GAME, playGame),
        takeLatest(GameActions.STOP_GAME, stopGame),
        takeLatest(GameActions.EVOLVE_GAME, evolveGame)
    ]);
}
