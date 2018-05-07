import { all, call, put, takeLatest } from 'redux-saga/effects';

import { AreaActions, receiveArea } from '../actions/area';
import API from '../services/api';

function * fetchArea() {
    yield put(receiveArea(yield call(API.area.get)));
}

export default function * watchArea() {
    yield all([
        takeLatest(AreaActions.REQUEST_AREA, fetchArea)
    ]);
}
