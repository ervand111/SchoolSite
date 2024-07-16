import { handleActions } from 'redux-actions';
import {
  getAchievement,
  getAchievements, getRandAchievement, getRandAchievements,
} from './actions';
import {getEvent} from "@/store/events/actions";

const initialState = {
  achievements: [],
  selectedAchievemet: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const achievementsReducer = handleActions(
  {
    [getAchievements.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
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
    [getRandAchievements.success]: (state, { payload }) => ({
      ...state,
      achievements: payload,
      isFetching: false,
    }),
    [getRandAchievements.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getAchievement.request]: (state) => ({
      ...state,
      isFetching: true,
    }),
    [getAchievement.success]: (state, { payload }) => ({
      ...state,
      selectedAchievemet: payload,
      isFetching: false,
    }),
    [getAchievement.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default achievementsReducer;
