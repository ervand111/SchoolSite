import { createAction } from 'redux-actions';

// Actions for Slides CRUD
export const addContact = {
  request: createAction('ADD_CONTACT_REQUEST'),
  success: createAction('ADD_CONTACT_SUCCESS'),
  failure: createAction('ADD_CONTACT_FAILURE'),
};
