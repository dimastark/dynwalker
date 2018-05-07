import { all } from 'redux-saga/effects';

import watchArea from './area';
import watchStats from './stats';

export default function * rootSaga() {
    yield all([
        watchArea(),
        watchStats()
    ])
}
