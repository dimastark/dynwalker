import { all, call, put, takeLatest } from 'redux-saga/effects';

import { StatsActions, receiveStats } from '../actions/stats';
import API from '../services/api';

function * fetchStats() {
    yield put(receiveStats(yield call(API.stats.get)));
}

export default function * watchStats() {
    yield all([
        takeLatest(StatsActions.REQUEST_STATS, fetchStats)
    ]);
}
