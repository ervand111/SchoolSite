import { takeLatest, call, put } from 'redux-saga/effects';
import { getGalleries } from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchGalleriesSaga({ payload = {} }) {
  try {
    const response = yield call(() => axiosInstance.get('/galleries', payload));
    const galleries = response.data;
    yield put(getGalleries.success(galleries));
  } catch (error) {
    yield put(getGalleries.failure(error.message));
  }
}

export function* gallerySaga() {
  yield takeLatest(getGalleries.request, fetchGalleriesSaga);
}
