import { handleActions } from 'redux-actions';
import {
  getPedagogic,
} from './actions';

const initialState = {
  pedagogic: [],
  selectedPedagogic: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const pedagogicReducer = handleActions(
  {
    [getPedagogic.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getPedagogic.success]: (state, { payload }) => ({
      ...state,
      pedagogic: payload,
      isFetching: false,
    }),
    [getPedagogic.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default pedagogicReducer;
