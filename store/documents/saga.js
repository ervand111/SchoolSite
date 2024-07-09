import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getDocuments
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchDocumentsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/documents', payload));
    const events = response.data;
    yield put(getDocuments.success(events));
  } catch (error) {
    yield put(getDocuments.failure(error.message));
  }
}


export function* documentSaga() {
  yield takeLatest(getDocuments.request, fetchDocumentsSaga);

}
