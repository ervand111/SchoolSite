import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getEvent,
  getEvents, getRandEvents,
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
function* fetchRandEventsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/events/rand', payload));
    const events = response.data;
    yield put(getRandEvents.success(events));
  } catch (error) {
    yield put(getRandEvents.failure(error.message));
  }
}
function* fetchEventSaga(action) {
  try {
    const {id} = action.payload;
    const response = yield call(() => axiosInstance.get('/events/'+id, action.payload));
    yield put(getEvent.success(response.data));
  } catch (error) {
    yield put(getEvent.failure(error.message));
  }
}

export function* eventSaga() {
  yield takeLatest(getEvents.request, fetchEventsSaga);
  yield takeLatest(getEvent.request, fetchEventSaga);
  yield takeLatest(getRandEvents.request, fetchRandEventsSaga);
}
