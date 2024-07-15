import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getAdvice,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchAdviceSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/advices', payload));
    const advice = response.data;
    yield put(getAdvice.success(advice));
  } catch (error) {
    yield put(getAdvice.failure(error.message));
  }
}


export function* adviceSaga() {
  yield takeLatest(getAdvice.request, fetchAdviceSaga);
}
