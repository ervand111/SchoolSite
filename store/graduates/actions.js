import { createAction } from 'redux-actions';

export const getGraduates = {
  request: createAction('GET_GRADUATES_REQUEST'),
  success: createAction('GET_GRADUATES_SUCCESS'),
  failure: createAction('GET_GRADUATES_FAILURE'),
};

