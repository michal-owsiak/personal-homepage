import { select, call, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage, saveDarkInLocalStorage } from "./themeLocalStorage";
import { selectCurrentTheme, selectIsThemeDark } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
  try {
    const theme = yield select(selectCurrentTheme);
    yield call(saveThemeInLocalStorage, theme);
  } catch (error) {
    console.error(error);
  }
};

function* saveDarkInLocalStorageHandler() {
  try {
    const dark = yield select(selectIsThemeDark);
    yield call(saveDarkInLocalStorage, dark);
  } catch (error) {
    console.error(error);
  }
};

export function* themeSaga() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
  yield takeEvery("*", saveDarkInLocalStorageHandler);
};