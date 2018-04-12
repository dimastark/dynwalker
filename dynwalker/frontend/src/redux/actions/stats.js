import { createAction } from 'redux-actions';

export const REQUEST_STATS = 'REQUEST_STATS';
export const requestStats = createAction(REQUEST_STATS);

export const RECEIVE_STATS = 'RECEIVE_STATS';
export const receiveStats = createAction(RECEIVE_STATS);
