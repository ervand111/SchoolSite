import { handleActions } from 'redux-actions';
import {
  getDocuments
} from './actions';

const initialState = {
  documents: [],
  selectedDocument: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const documentReducer = handleActions(
  {
    [getDocuments.success]: (state, { payload }) => ({
      ...state,
      documents: payload,
      isFetching: false,
    }),
    [getDocuments.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getDocuments.request]: (state) => ({
      ...state,
      isFetching: true,
    }),
  },
  initialState
);

export default documentReducer;
