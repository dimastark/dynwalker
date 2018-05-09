import transform, { ByIdDictionary } from '../services/transform';
import { DynamicEntity, StaticEntity } from '../services/api/area';
import { AreaAction, AreaActions } from '../actions/area';

export interface AreaState {
    isPending: boolean,
    size: {
        width: number,
        height: number
    },
    statics: StaticEntity[],
    dynamics: {
        byId: ByIdDictionary<DynamicEntity>,
        allIds: number[]
    }
}

const defaultState: AreaState = {
    isPending: false,
    size: { width: -1, height: -1 },
    statics: [],
    dynamics: {
        byId: {},
        allIds: []
    }
};

export default function areaReducer(state: AreaState = defaultState, action: AreaAction): AreaState {
    switch (action.type) {
        case AreaActions.REQUEST_AREA:
            return {
                ...state,
                isPending: true
            };

        case AreaActions.RECEIVE_AREA:
            return {
                ...state,
                isPending: false,
                size: action.area.size,
                statics: action.area.statics,
                dynamics: {
                    byId: transform.byId(action.area.dynamics),
                    allIds: transform.allIds(action.area.dynamics)
                }
            };

        default:
            return state;
    }
}
