import { handleActions } from 'redux-actions';
import {
  addContact,
} from './actions';

const initialState = {
  contact: null,
  isFetching: false,
  isAdding: false,
  error: null,
};

const contactReducer = handleActions(
  {
    [addContact.request]: (state, { payload }) => ({
      ...state,
      isAdding: true,
      error:null
    }),
    [addContact.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
    }),
    [addContact.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default contactReducer;
