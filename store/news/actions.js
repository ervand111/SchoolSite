import { createAction } from 'redux-actions';

export const getNews = {
  request: createAction('GET_NEWS_REQUEST'),
  success: createAction('GET_NEWS_SUCCESS'),
  failure: createAction('GET_NEWS_FAILURE'),
};

export const getLastNews = {
  request: createAction('GET_LAST_NEWS_REQUEST'),
  success: createAction('GET_LAST_NEWS_SUCCESS'),
  failure: createAction('GET_LAST_NEWS_FAILURE'),
};

export const getRandNews = {
  request: createAction('GET_RAND_NEWS_REQUEST'),
  success: createAction('GET_RAND_NEWS_SUCCESS'),
  failure: createAction('GET_RAND_NEWS_FAILURE'),
};

export const getNewsById = {
  request: createAction('GET_BY_ID_NEWS_REQUEST'),
  success: createAction('GET_BY_ID_NEWS_SUCCESS'),
  failure: createAction('GET_BY_ID_NEWS_FAILURE'),
};

