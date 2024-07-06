import { handleActions } from 'redux-actions';
import {
  getSlides,
} from './actions';

const initialState = {
  slides: [],
  selectedSlide: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const slideReducer = handleActions(
  {
    [getSlides.success]: (state, { payload }) => ({
      ...state,
      slides: payload,
      isFetching: false,
    }),
    [getSlides.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default slideReducer;
