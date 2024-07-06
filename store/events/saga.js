import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getEvents,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchEventsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/events', payload));
    const events = response.data;
    yield put(getEvents.success(events));
  } catch (error) {
    yield put(getEvents.failure(error.message));
  }
}


// Slide Watcher Saga
export function* eventSaga() {
  yield takeLatest(getEvents.request, fetchEventsSaga);
}
