import { handleActions } from 'redux-actions';
import {
  getStudent,
} from './actions';

const initialState = {
  student: [],
  selectedStudent: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const studentReducer = handleActions(
  {
    [getStudent.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getStudent.success]: (state, { payload }) => ({
      ...state,
      student: payload,
      isFetching: false,
    }),
    [getStudent.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default studentReducer;
