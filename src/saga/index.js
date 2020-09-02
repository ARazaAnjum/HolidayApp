import {all, fork} from 'redux-saga/effects';
import common from './common';

export default function* rootSaga() {
  yield all([fork(common)]);
}
