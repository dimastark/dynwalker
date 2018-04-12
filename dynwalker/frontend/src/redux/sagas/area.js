import { all, call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_AREA, receiveArea } from '../actions/area';
import API from '../services/api';

function * fetchArea() {
    const result = yield call(API.area.get);
    yield put(receiveArea({ data: result }));
}

export default function * watchArea() {
    yield all([
        takeLatest(REQUEST_AREA, fetchArea)
    ]);
}
