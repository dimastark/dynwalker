import { Stats } from '../services/api/stats';

export enum StatsActions {
    REQUEST_STATS = 'REQUEST_STATS',
    RECEIVE_STATS = 'RECEIVE_STATS'
}

export type RequestStatsAction = {
    type: StatsActions.REQUEST_STATS
};

export function requestStats(): RequestStatsAction {
    return {
        type: StatsActions.REQUEST_STATS
    };
}

export type ReceiveStatsAction = {
    type: StatsActions.RECEIVE_STATS,
    stats: Stats
};

export function receiveStats(stats: Stats): ReceiveStatsAction {
    return {
        type: StatsActions.RECEIVE_STATS,
        stats
    };
}

export type StatsAction = RequestStatsAction | ReceiveStatsAction | { type: '' };
