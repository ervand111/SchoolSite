import { handleActions } from 'redux-actions';
import {
  getEvents,
} from './actions';

const initialState = {
  events: [],
  selectedSlide: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const eventReducer = handleActions(
  {
    [getEvents.success]: (state, { payload }) => ({
      ...state,
      events: payload,
      isFetching: false,
    }),
    [getEvents.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default eventReducer;
