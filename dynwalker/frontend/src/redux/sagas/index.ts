import { all } from 'redux-saga/effects';

import watchArea from './area';
import watchStats from './stats';
import watchGame from './game';

export default function * rootSaga() {
    yield all([
        watchArea(),
        watchStats(),
        watchGame()
    ])
}
