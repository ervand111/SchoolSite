import { handleActions } from 'redux-actions';
import {
  getUserWithPedagogic,
} from './actions';

const initialState = {
  users: [],
  selectedUser: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const usersPedagogicReducer = handleActions(
  {
    [getUserWithPedagogic.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getUserWithPedagogic.success]: (state, { payload }) => ({
      ...state,
      users: payload,
      isFetching: false,
    }),
    [getUserWithPedagogic.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default usersPedagogicReducer;
