import { call, put, takeLatest } from 'redux-saga/effects';

import {
  editMessageFailed,
  editMessageInProgress,
  editMessageSuccessful
} from '../containers/Me/actions';
import { EDIT_MESSAGE } from '../containers/Me/constants';

import AppAPI from '../api';
import { ActionType } from '../constants/types';

function* edtMessage(action: ActionType<number>) {
  try {
    yield put(editMessageInProgress());
    const result = yield call(AppAPI.editMessage, action.payload);
    yield put(editMessageSuccessful(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(editMessageFailed());
  }
}

export function* editMessage() {
  yield takeLatest(EDIT_MESSAGE, edtMessage);
}
