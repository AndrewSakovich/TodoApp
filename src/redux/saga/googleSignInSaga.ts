import { call } from 'redux-saga/effects';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import { checkUsersSaga } from './checkUsersSaga';
import { GoogleSignInSagaAction } from '../actions/authSagaActions/googleSignInSagaAction';

export function* googleSignInSaga(action: GoogleSignInSagaAction) {
  const { callback } = action.payload;
  try {
    const { idToken } = yield GoogleSignin.signIn();
    // Create a Google credential with the accessToken
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const { user } = yield auth().signInWithCredential(googleCredential);
    const userToken = user.uid;
    yield call(callback);
    yield call(checkUsersSaga, userToken, user);
  } catch (error: any) {
    yield call(callback);
    createAlertMessageHelper({
      message: `${error.message}`,
      title: 'Login error',
      cancelButtonTitle: 'Cancel',
    });
  }
}
