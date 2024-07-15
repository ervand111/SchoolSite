import { handleActions } from 'redux-actions';
import {
  getAdvice,
} from './actions';

const initialState = {
  advice: [],
  selectedAdvice: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const adviceReducer = handleActions(
  {
    [getAdvice.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getAdvice.success]: (state, { payload }) => ({
      ...state,
      advice: payload,
      isFetching: false,
    }),
    [getAdvice.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default adviceReducer;
