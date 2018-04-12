import { handleActions } from 'redux-actions';

import { REQUEST_STATS, RECEIVE_STATS } from '../actions/stats';

const defaultState = {
    isPending: false,
    description: '',
    populations: {
        count: -1,
        from: -1,
        to: -1,
        items: []
    }
};

export default handleActions({
    [REQUEST_STATS]: state => ({
        ...state,
        isPending: true
    }),

    [RECEIVE_STATS]: (state, {payload}) => ({
        ...state,
        ...payload.data
    })
}, defaultState);
