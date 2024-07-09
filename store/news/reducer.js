import { handleActions } from 'redux-actions';
import {
  getLastNews,
  getNews,
  getNewsById, getRandNews
} from './actions';

const initialState = {
  news: [],
  selectedNews: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const newsReducer = handleActions(
  {
    [getRandNews.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getRandNews.success]: (state, { payload }) => ({
      ...state,
      news: payload,
      isFetching: false,
    }),
    [getRandNews.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getNews.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getNews.success]: (state, { payload }) => ({
      ...state,
      news: payload,
      isFetching: false,
    }),
    [getNews.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getNewsById.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
    }),
    [getNewsById.success]: (state, { payload }) => ({
      ...state,
      selectedNews: payload,
      isFetching: false,
    }),
    [getNewsById.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
    [getLastNews.success]: (state, { payload }) => ({
      ...state,
      news: payload,
      isFetching: false,
    }),
    [getLastNews.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default newsReducer;
