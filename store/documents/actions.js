import { createAction } from 'redux-actions';

export const getDocuments = {
  request: createAction('GET_DOCUMENTS_REQUEST'),
  success: createAction('GET_DOCUMENTS_SUCCESS'),
  failure: createAction('GET_DOCUMENTS_FAILURE'),
};

