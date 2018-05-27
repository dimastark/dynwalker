import { combineReducers } from 'redux';

import area, { AreaState } from './area';
import stats, { StatsState } from './stats';
import game, { GameState } from './game';

export type RootState = {
    area: AreaState,
    stats: StatsState,
    game: GameState
};

export default combineReducers<RootState>({
    area,
    stats,
    game
});
