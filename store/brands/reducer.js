import { handleActions } from 'redux-actions';
import {
  getBrands,
} from './actions';

const initialState = {
  brands: [],
  selectedSlide: null,
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const brandReducer = handleActions(
  {
    [getBrands.success]: (state, { payload }) => ({
      ...state,
      brands: payload,
      isFetching: false,
    }),
    [getBrands.failure]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
  initialState
);

export default brandReducer;
