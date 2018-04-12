import { all, call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_STATS, receiveStats } from '../actions/stats';
import API from '../services/api';

function * fetchStats() {
    const result = yield call(API.stats.get);
    yield put(receiveStats({ data: result }));
}

export default function * watchStats() {
    yield all([
        takeLatest(REQUEST_STATS, fetchStats)
    ]);
}
