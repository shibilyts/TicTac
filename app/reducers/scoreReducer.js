import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  computer: 0,
  user: 0,
  draw: 0,
};

export const scoreReducer = createReducer(initialState, {
  [types.UPDATE_MACHINE_SCORE](state, action) {
    return {
      ...state,
      computer: action.score,
    };
  },
  [types.UPDATE_USER_SCORE](state, action) {
    return {
      ...state,
      user: action.score,
    };
  },
  [types.UPDATE_DRAW_SCORE](state, action) {
    return {
      ...state,
      user: action.score,
    };
  },
});
