import { Area } from '../services/api/area';

export enum AreaActions {
    REQUEST_AREA = 'REQUEST_AREA',
    RECEIVE_AREA = 'RECEIVE_AREA'
}

export type RequestAreaAction = {
    type: AreaActions.REQUEST_AREA
};

export function requestArea(): RequestAreaAction {
    return {
        type: AreaActions.REQUEST_AREA
    };
}

export type ReceiveAreaAction = {
    type: AreaActions.RECEIVE_AREA,
    area: Area
};

export function receiveArea(area: Area): ReceiveAreaAction {
    return {
        type: AreaActions.RECEIVE_AREA,
        area
    };
}

export type AreaAction = RequestAreaAction | ReceiveAreaAction | { type: '' };
