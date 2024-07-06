import { handleActions } from 'redux-actions';
import {
  getGraduates,
} from './actions';

const initialState = {
  graduates: [],
  selectedGraduates: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const graduateReducer = handleActions(
  {
    [getGraduates.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getGraduates.success]: (state, { payload }) => ({
      ...state,
      graduates: payload,
      isFetching: false,
    }),
    [getGraduates.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default graduateReducer;
