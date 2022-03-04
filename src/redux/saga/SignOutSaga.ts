import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { signOutAction } from '../actions/authActions/signOutAction';
import { put } from 'redux-saga/effects';

export function* signOutSaga() {
  try {
    yield auth().signOut();
    yield GoogleSignin.revokeAccess();
    yield put(signOutAction());
  } catch (error) {
    console.error(error);
  }
}