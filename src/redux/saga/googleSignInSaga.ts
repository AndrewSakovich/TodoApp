import { call } from 'redux-saga/effects';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';
import { checkUsersSaga } from './checkUsersSaga';
import { GoogleSignInSagaAction } from '../actions/authSagaActions/googleSignInSagaAction';

export function* googleSignInSaga(action: GoogleSignInSagaAction) {
  const { callback } = action.payload;
  try {
    callback();
    const { idToken } = yield GoogleSignin.signIn();
    // Create a Google credential with the accessToken
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const { user } = yield auth().signInWithCredential(googleCredential);
    const userToken = user.uid;
    yield call(checkUsersSaga, userToken, user);
  } catch (error: any) {
    createErrorAlertMessageHelper(`${error.message}`, 'Login error');
  }
}
