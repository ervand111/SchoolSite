import { createAction } from 'redux-actions';

export const getUserWithPedagogic = {
  request: createAction('GET_PEDAGOGIC_WITH_USER_REQUEST'),
  success: createAction('GET_PEDAGOGIC_WITH_USER_SUCCESS'),
  failure: createAction('GET_PEDAGOGIC_WITH_USER_FAILURE'),
};

