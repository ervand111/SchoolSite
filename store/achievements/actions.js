import { createAction } from 'redux-actions';

export const getAchievements = {
  request: createAction('GET_ACHIEVEMENTS_REQUEST'),
  success: createAction('GET_ACHIEVEMENTS_SUCCESS'),
  failure: createAction('GET_ACHIEVEMENTS_FAILURE'),
};

export const getAchievement = {
  request: createAction('GET_ACHIEVEMENT_REQUEST'),
  success: createAction('GET_ACHIEVEMENT_SUCCESS'),
  failure: createAction('GET_ACHIEVEMENT_FAILURE'),
};
