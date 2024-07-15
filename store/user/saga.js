import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getUserWithPedagogic,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchUsersSaga(action) {
  try {
    const {id} = action.payload;
    const response = yield call(() => axiosInstance.get('/users/'+id, action.payload));
    yield put(getUserWithPedagogic.success(response.data));
  } catch (error) {
    yield put(getUserWithPedagogic.failure(error.message));
  }
}


// Slide Watcher Saga
export function* usersPedagogicSaga() {
  yield takeLatest(getUserWithPedagogic.request, fetchUsersSaga);
}
