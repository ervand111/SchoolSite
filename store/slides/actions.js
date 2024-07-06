import { createAction } from 'redux-actions';

// Actions for Slides CRUD
export const getSlides = {
  request: createAction('GET_SLIDES_REQUEST'),
  success: createAction('GET_SLIDES_SUCCESS'),
  failure: createAction('GET_SLIDES_FAILURE'),
};
