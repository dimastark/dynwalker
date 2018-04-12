import { createAction } from 'redux-actions';

export const REQUEST_AREA = 'REQUEST_AREA';
export const requestArea = createAction(REQUEST_AREA);

export const RECEIVE_AREA = 'RECEIVE_AREA';
export const receiveArea = createAction(RECEIVE_AREA);

export const PATCH_AREA = 'PATCH_AREA';
export const patchArea = createAction(PATCH_AREA);
