import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getAchievements,
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchAchievementsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/achievements', payload));
    const achievements = response.data;
    yield put(getAchievements.success(achievements));
  } catch (error) {
    yield put(getAchievements.failure(error.message));
  }
}


// Slide Watcher Saga
export function* achievementSaga() {
  yield takeLatest(getAchievements.request, fetchAchievementsSaga);
}
