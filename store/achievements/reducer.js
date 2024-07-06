import { handleActions } from 'redux-actions';
import {
  getAchievements,
} from './actions';

const initialState = {
  achievements: [],
  selectedSlide: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const achievementsReducer = handleActions(
  {
    [getAchievements.success]: (state, { payload }) => ({
      ...state,
      achievements: payload,
      isFetching: false,
    }),
    [getAchievements.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default achievementsReducer;
