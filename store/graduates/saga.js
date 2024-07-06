import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getGraduates,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchGraduateSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/graduates', payload));
    const graduates = response.data;
    yield put(getGraduates.success(graduates));
  } catch (error) {
    yield put(getGraduates.failure(error.message));
  }
}


// Slide Watcher Saga
export function* graduateSaga() {
  yield takeLatest(getGraduates.request, fetchGraduateSaga);
}
