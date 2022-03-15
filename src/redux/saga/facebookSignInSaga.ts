import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import { AccessTokenMap } from 'react-native-fbsdk-next/src/FBAccessToken';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { put } from 'redux-saga/effects';
import { successSignInAction } from '../actions/authActions/successSignInAction';

export function* facebookSignInSaga() {
  try {
    // Attempt login with permissions
    yield LoginManager.logInWithPermissions(['public_profile', 'email']);

    // Once signed in, get the users AccessToken
    const dataToken: AccessTokenMap = yield AccessToken.getCurrentAccessToken();
    const accessToken = dataToken.accessToken;
    // const user = profileRequest.callback();
    if (!accessToken) {
      createErrorAlertMessageHelper(
        'Something went wrong obtaining access accessToken',
      );
    }

    console.log('dataToken', dataToken);
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      dataToken.accessToken,
    );
    console.log('facebookCredential   ', facebookCredential);

    // Sign-in the user with the credential
    yield auth().signInWithCredential(facebookCredential);
    const { user } = yield auth().signInWithCredential(facebookCredential);
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
    createErrorAlertMessageHelper(error.message);
  }
}
