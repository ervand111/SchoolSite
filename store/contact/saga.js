import {takeLatest, call, put} from 'redux-saga/effects';
import {
  addContact,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

// Slide Sagas
function* sendMessage(action) {
  try {
    const response = yield call(() => axiosInstance.post('/messages', action.payload));
    yield put(addContact.success(response.data));
  } catch (error) {
    yield put(addContact.failure(error.message));
  }
}


// Slide Watcher Saga
export function* contactSaga() {
  yield takeLatest(addContact.request, sendMessage);
}
