import { all } from "redux-saga/effects";
import { incSortByRamWatcher, decSortByRamWatcher } from "./sortSaga";

export function* rootWatcher() {
  yield all([incSortByRamWatcher, decSortByRamWatcher]);
}
