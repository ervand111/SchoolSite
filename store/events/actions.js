import { createAction } from 'redux-actions';

export const getEvents = {
  request: createAction('GET_EVENTS_REQUEST'),
  success: createAction('GET_EVENTS_SUCCESS'),
  failure: createAction('GET_EVENTS_FAILURE'),
};

export class getSlides {
  static request;
}