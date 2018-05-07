import { combineReducers } from 'redux';

import area, { AreaState } from './area';
import stats, { StatsState } from './stats';

export type RootState = {
    area: AreaState,
    stats: StatsState
};

export default combineReducers<RootState>({
    area,
    stats
});
