import { handleActions } from 'redux-actions';

import { REQUEST_AREA, RECEIVE_AREA, PATCH_AREA } from '../actions/area';
import transforms from '../services/transforms';

const defaultState = {
    isPending: false,
    size: { width: -1, height: -1 },
    statics: [],
    dynamics: {
        byId: {},
        allIds: []
    }
};

export default handleActions({
    [REQUEST_AREA]: state => ({
        ...state,
        isPending: true
    }),

    [RECEIVE_AREA]: (state, {payload}) => ({
        ...state,
        isPending: false,
        size: payload.data.size,
        statics: payload.data.statics,
        dynamics: {
            byId: transforms.byId(payload.data.dynamics),
            allIds: transforms.allIds(payload.data.dynamics)
        }
    }),

    [PATCH_AREA]: (state, {payload}) => ({
        ...state,
        dynamics: {
            ...state.dynamics,
            byId: transforms.byIdMerge(state.dynamics.byId, payload.data)
        }
    })
}, defaultState);
