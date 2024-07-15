import { handleActions } from 'redux-actions';
import {
  getStuff,
} from './actions';

const initialState = {
  stuff: [],
  selectedStuff: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const stuffReducer = handleActions(
  {
    [getStuff.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getStuff.success]: (state, { payload }) => ({
      ...state,
      stuff: payload,
      isFetching: false,
    }),
    [getStuff.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default stuffReducer;
