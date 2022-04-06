import auth from '@react-native-firebase/auth';
import { signOutAction } from '../actions/authActions/signOutAction';
import { put } from 'redux-saga/effects';
import { createErrorAlertMessageHelper } from '../../helpers/createAlertMessageHelper';

export function* signOutSaga() {
  try {
    yield auth().signOut();

    yield put(signOutAction());
  } catch (error: any) {
    createErrorAlertMessageHelper(error.message);
  }
}
