import { handleActions } from 'redux-actions';
import {
  getEvent,
  getEvents, getRandEvents,
} from './actions';

const initialState = {
  events: [],
  selectedEvent: null,
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
    [getRandEvents.success]: (state, { payload }) => ({
      ...state,
      events: payload,
      isFetching: false,
    }),
    [getRandEvents.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getEvent.request]: (state) => ({
      ...state,
      isFetching: true,
    }),
    [getEvent.success]: (state, { payload }) => ({
      ...state,
      selectedEvent: payload,
      isFetching: false,
    }),
    [getEvent.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default eventReducer;
