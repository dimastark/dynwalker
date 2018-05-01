import { handleActions } from 'redux-actions';

import { REQUEST_STATS, RECEIVE_STATS } from '../actions/stats';

const defaultState = {
    isPending: false,
    description: '',
    populations: {
        species: [],
        fitness: []
    }
};

export default handleActions({
    [REQUEST_STATS]: state => ({
        ...state,
        isPending: true
    }),

    [RECEIVE_STATS]: (state, {payload}) => ({
        ...state,
        ...payload.data,
        isPending: false
    })
}, defaultState);
