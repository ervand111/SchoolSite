import {all} from "redux-saga/effects";
import {slideSaga} from "./slides/saga";
import {eventSaga} from "./events/saga";
import {newsSaga} from "@/store/news/saga";
import {brandSaga} from "@/store/brands/saga";
import {achievementSaga} from "@/store/achievements/saga";
import {graduateSaga} from "@/store/graduates/saga";

function* rootSaga() {
  yield all([
    slideSaga(),
    eventSaga(),
    newsSaga(),
    brandSaga(),
    achievementSaga(),
    graduateSaga(),
  ]);
}

export default rootSaga;
