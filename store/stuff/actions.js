import { createAction } from 'redux-actions';

export const getStuff = {
  request: createAction('GET_STUFF_REQUEST'),
  success: createAction('GET_STUFF_SUCCESS'),
  failure: createAction('GET_STUFF_FAILURE'),
};

