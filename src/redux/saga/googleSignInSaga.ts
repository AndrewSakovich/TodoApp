import { put } from 'redux-saga/effects';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';
import { checkFirebaseUsersSagaAction } from '../actions/checkFirebaseUsersSagaAction';

export function* googleSignInSaga() {
  try {
    const { idToken } = yield GoogleSignin.signIn();
    // Create a Google credential with the accessToken
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const { user } = yield auth().signInWithCredential(googleCredential);

    const userToken = user.uid;
    yield put(checkFirebaseUsersSagaAction({ user, userToken }));
  } catch (error: any) {
    createErrorAlertMessageHelper(`${error.message}`, 'Login error');
  }
}
