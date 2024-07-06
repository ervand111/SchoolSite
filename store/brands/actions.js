import { createAction } from 'redux-actions';

export const getBrands = {
  request: createAction('GET_BRANDS_REQUEST'),
  success: createAction('GET_BRANDS_SUCCESS'),
  failure: createAction('GET_BRANDS_FAILURE'),
};

export class getSlides {
  static request;
}