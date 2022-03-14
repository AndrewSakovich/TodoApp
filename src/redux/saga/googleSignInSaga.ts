import { put } from 'redux-saga/effects';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { successSignInAction } from '../actions/authActions/successSignInAction';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';

export function* googleSignInSaga() {
  try {
    const { idToken } = yield GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const { user } = yield auth().signInWithCredential(googleCredential);

    const userToken = user.uid;
    const usersData: FirebaseDatabaseTypes.DataSnapshot =
      yield createReferenceHelper.ref(`/Users/`).once('value');
    const users = Object.keys(usersData.val() ?? {});
    const checkUser = users.find(item => {
      return item === userToken;
    });

    if (checkUser) {
      yield put(successSignInAction({ userToken, user }));
    } else {
      yield createReferenceHelper
        .ref(`/Users/`)
        .child(`${userToken}`)
        .set(userToken);

      yield put(successSignInAction({ userToken, user }));
    }
  } catch (error: any) {
    createErrorAlertMessageHelper(`${error.message}`, 'Login error');
  }
}
