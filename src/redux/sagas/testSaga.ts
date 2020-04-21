import { takeEvery, fork, put, all, select } from "redux-saga/effects";
import axios from "axios";
import { addToCount } from "../actions/testActions";
import { START_FETCH, getCount } from "../reducer/testReducer";

function* log() {
  yield console.log("saga used");

  const state = yield select((state) => getCount(state));

  console.log("state", state);

  const { data } = yield axios.get(
    "https://jsonplaceholder.typicode.com/posts/5"
  );

  yield put(addToCount(data));
}

function* test() {
  yield takeEvery(START_FETCH, log);
}

export default function* () {
  yield all([fork(test)]);
}
