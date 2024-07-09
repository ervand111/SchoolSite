import { createAction } from 'redux-actions';

export const getEvents = {
  request: createAction('GET_EVENTS_REQUEST'),
  success: createAction('GET_EVENTS_SUCCESS'),
  failure: createAction('GET_EVENTS_FAILURE'),
};
export const getEvent = {
  request: createAction('GET_EVENT_REQUEST'),
  success: createAction('GET_EVENT_SUCCESS'),
  failure: createAction('GET_EVENT_FAILURE'),
};

