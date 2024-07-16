import { createAction } from 'redux-actions';

export const getStudent = {
  request: createAction('GET_STUDENT_REQUEST'),
  success: createAction('GET_STUDENT_SUCCESS'),
  failure: createAction('GET_STUDENT_FAILURE'),
};

