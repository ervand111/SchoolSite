import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getPedagogic,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchPedagogicSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/pedagogicals', payload));
    const graduates = response.data;
    yield put(getPedagogic.success(graduates));
  } catch (error) {
    yield put(getPedagogic.failure(error.message));
  }
}


// Slide Watcher Saga
export function* pedagogicSaga() {
  yield takeLatest(getPedagogic.request, fetchPedagogicSaga);
}
