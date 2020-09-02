import {takeLatest, put, call} from 'redux-saga/effects';
import {axiosClient, getHolidayList} from '../services/api';
import {ErrorIdentity} from '../infrastructure/enums/index';
import Config from "react-native-config";

import {
  WATCH_HOLIDAY_LIST,
  LIST_LOADING_INITIATE,
  LIST_LOADING_SUCCESS,
  LIST_LOADING_FAILED,
} from '../constants/index';
import {ErrorHandler} from '../infrastructure/helpers/ErrorHandler';

const fetchData = action => 
  axiosClient.get(`${getHolidayList}?key=${Config.GOOGLE_CALANDER_API_KEY}`);

function* fetchDataSaga(action) {
  yield put({
    type: LIST_LOADING_INITIATE,
  });
  const response = yield call(fetchData, action);
  if (response.status === ErrorIdentity.OK) {
    yield put({
      type: LIST_LOADING_SUCCESS,
      payload: response.data.items,
    });
  } else {
    yield put({
      type: LIST_LOADING_FAILED,
      error: ErrorHandler.generateErrorMesssage(response),
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(WATCH_HOLIDAY_LIST, fetchDataSaga);
}
