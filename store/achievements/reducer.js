import { handleActions } from 'redux-actions';
import {
  getAchievement,
  getAchievements,
} from './actions';
import {getEvent} from "@/store/events/actions";

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
    [getAchievement.request]: (state) => ({
      ...state,
      isFetching: true,
    }),
    [getAchievement.success]: (state, { payload }) => ({
      ...state,
      selectedEvent: payload,
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
