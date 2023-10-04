import { all } from "redux-saga/effects";
import { themeSaga } from "./themes/themeSaga";

export default function* rootSaga() {
  yield all([
    themeSaga(),
  ]);
};