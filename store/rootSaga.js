import {all} from "redux-saga/effects";
import {slideSaga} from "./slides/saga";
import {eventSaga} from "./events/saga";
import {newsSaga} from "../store/news/saga";
import {brandSaga} from "../store/brands/saga";
import {achievementSaga} from "../store/achievements/saga";
import {graduateSaga} from "../store/graduates/saga";
import {documentSaga} from "..//store/documents/saga";
import {pedagogicSaga} from "../store/pedagogic/saga";
import {usersPedagogicSaga} from "../store/user/saga";
import {stuffSaga} from "../store/stuff/saga";
import {adviceSaga} from "../store/advices/saga";
import {contactSaga} from "../store/contact/saga";
import {studentSaga} from "../store/student/saga";

function* rootSaga() {
  yield all([
    slideSaga(),
    eventSaga(),
    newsSaga(),
    brandSaga(),
    achievementSaga(),
    graduateSaga(),
    documentSaga(),
    pedagogicSaga(),
    usersPedagogicSaga(),
    stuffSaga(),
    adviceSaga(),
    contactSaga(),
    studentSaga()
  ]);
}

export default rootSaga;
