import { createAction } from 'redux-actions';

export const getAdvice = {
  request: createAction('GET_ADVICE_REQUEST'),
  success: createAction('GET_ADVICE_SUCCESS'),
  failure: createAction('GET_ADVICE_FAILURE'),
};

