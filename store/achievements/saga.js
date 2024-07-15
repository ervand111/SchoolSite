import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getAchievement,
  getAchievements, getRandAchievements,
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
function* fetchRandAchievementsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/achievements/rand', payload));
    const achievements = response.data;
    yield put(getRandAchievements.success(achievements));
  } catch (error) {
    yield put(getRandAchievements.failure(error.message));
  }
}
function* fetchAchievementSaga(action) {
  try {
    const {id} = action.payload;
    const response = yield call(() => axiosInstance.get('/achievements/'+id, action.payload));
    yield put(getAchievement.success(response.data));
  } catch (error) {
    yield put(getAchievement.failure(error.message));
  }
}

export function* achievementSaga() {
  yield takeLatest(getAchievements.request, fetchAchievementsSaga);
  yield takeLatest(getAchievement.request, fetchAchievementSaga);
  yield takeLatest(getRandAchievements.request, fetchRandAchievementsSaga);
}
