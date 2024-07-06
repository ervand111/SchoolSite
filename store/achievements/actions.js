import { createAction } from 'redux-actions';

export const getAchievements = {
  request: createAction('GET_ACHIEVEMENTS_REQUEST'),
  success: createAction('GET_ACHIEVEMENTS_SUCCESS'),
  failure: createAction('GET_ACHIEVEMENTS_FAILURE'),
};

