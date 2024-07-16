import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getStudent,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchStudentSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/students', payload));
    const student = response.data;
    yield put(getStudent.success(student));
  } catch (error) {
    yield put(getStudent.failure(error.message));
  }
}


export function* studentSaga() {
  yield takeLatest(getStudent.request, fetchStudentSaga);
}
