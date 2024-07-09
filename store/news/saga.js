import {takeLatest, call, put} from 'redux-saga/effects';
import {
  getLastNews,

  getNews, getNewsById, getRandNews
} from './actions';
import axiosInstance from 'configs/axiosIntance';

function* fetchNewsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/news', payload));
    const news = response.data;
    yield put(getNews.success(news));
  } catch (error) {
    yield put(getNews.failure(error.message));
  }
}
function* fetchLastNewsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/news/last', payload));
    const news = response.data;
    yield put(getLastNews.success(news));
  } catch (error) {
    yield put(getLastNews.failure(error.message));
  }
}
function* fetchRandNewsSaga({payload = {}}) {
  try {
    const response = yield call(() => axiosInstance.get('/news/rand', payload));
    const news = response.data;
    yield put(getRandNews.success(news));
  } catch (error) {
    yield put(getRandNews.failure(error.message));
  }
}
function* fetchByIdNewsSaga(action) {
  try {
    const {id} = action.payload;
    const response = yield call(() => axiosInstance.get('/news/'+id, action.payload));
    yield put(getNewsById.success(response.data));
  } catch (error) {
    yield put(getNewsById.failure(error.message));
  }
}


export function* newsSaga() {
  yield takeLatest(getNews.request, fetchNewsSaga);
  yield takeLatest(getLastNews.request, fetchLastNewsSaga);
  yield takeLatest(getNewsById.request, fetchByIdNewsSaga);
  yield takeLatest(getRandNews.request, fetchRandNewsSaga);
}
