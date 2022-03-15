import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import { AccessTokenMap } from 'react-native-fbsdk-next/src/FBAccessToken';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { put } from 'redux-saga/effects';
import { successSignInAction } from '../actions/authActions/successSignInAction';
import { checkFirebaseUsersSagaAction } from '../actions/checkFirebaseUsersSagaAction';

export function* facebookSignInSaga() {
  try {
    // Attempt login with permissions
    yield LoginManager.logInWithPermissions(['public_profile', 'email']);

    // Once signed in, get the users AccessToken
    const dataToken: AccessTokenMap = yield AccessToken.getCurrentAccessToken();
    const accessToken = dataToken.accessToken;

    // Create a Firebase credential with the AccessToken
    const facebookCredential =
      auth.FacebookAuthProvider.credential(accessToken);

    // Sign-in the user with the credential
    yield auth().signInWithCredential(facebookCredential);
    const { user } = yield auth().signInWithCredential(facebookCredential);
    const userToken = user.uid;

    yield put(checkFirebaseUsersSagaAction({ user, userToken }));
  } catch (error: any) {
    createErrorAlertMessageHelper(error.message);
  }
}
