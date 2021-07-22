import {
  increaseSortCreator,
  decreaseSortCreator,
  DEC_BY_PARAM,
  INC_BY_PARAM,
} from "../store/goodsReducer";
import { put, takeEvery } from "redux-saga/effects";

function* incSortByRamWorker() {
  yield put(increaseSortCreator());
}

function* decSortByRamWorker() {
  yield put(decreaseSortCreator());
}

export function* incSortByRamWatcher() {
  yield takeEvery(INC_BY_PARAM, incSortByRamWorker);
}

export function* decSortByRamWatcher() {
  yield takeEvery(DEC_BY_PARAM, decSortByRamWorker);
}
