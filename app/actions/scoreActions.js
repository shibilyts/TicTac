import * as types from './types';

export function updateUserScore(score) {
  return {
    type: types.UPDATE_USER_SCORE,
    score,
  };
}

export function updateMachineScore(score) {
  return {
    type: types.UPDATE_MACHINE_SCORE,
    score,
  };
}
export function updateDrawScore(score) {
  return {
    type: types.UPDATE_MACHINE_SCORE,
    score,
  };
};