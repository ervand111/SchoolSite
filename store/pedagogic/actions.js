import { createAction } from 'redux-actions';

export const getPedagogic = {
  request: createAction('GET_PEDAGOGIC_REQUEST'),
  success: createAction('GET_PEDAGOGIC_SUCCESS'),
  failure: createAction('GET_PEDAGOGIC_FAILURE'),
};

