import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getBrands,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchBrandsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/brands', payload));
    const brands = response.data;
    yield put(getBrands.success(brands));
  } catch (error) {
    yield put(getBrands.failure(error.message));
  }
}


// Slide Watcher Saga
export function* brandSaga() {
  yield takeLatest(getBrands.request, fetchBrandsSaga);
}
