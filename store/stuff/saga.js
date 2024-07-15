import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getStuff,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchStuffSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/stuffs', payload));
    const stuff = response.data;
    yield put(getStuff.success(stuff));
  } catch (error) {
    yield put(getStuff.failure(error.message));
  }
}


export function* stuffSaga() {
  yield takeLatest(getStuff.request, fetchStuffSaga);
}
