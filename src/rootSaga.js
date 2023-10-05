import { all } from "redux-saga/effects";
import { themeSaga } from "./theme/themeSaga";

export default function* rootSaga() {
  yield all([
    themeSaga(),
  ]);
};