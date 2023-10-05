import { select, call, takeEvery } from "redux-saga/effects";
import { saveDarkInLocalStorage } from "./themeLocalStorage";
import { selectIsThemeDark } from "./themeSlice";

function* saveDarkInLocalStorageHandler() {
  try {
    const dark = yield select(selectIsThemeDark);
    yield call(saveDarkInLocalStorage, dark);
  } catch (error) {
    console.error(error);
  }
};

export function* themeSaga() {
  yield takeEvery("*", saveDarkInLocalStorageHandler);
};