import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import { AccessTokenMap } from 'react-native-fbsdk-next/src/FBAccessToken';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import { call } from 'redux-saga/effects';
import { checkUsersSaga } from './checkUsersSaga';
import { FacebookSignInSagaAction } from '../actions/authSagaActions/facebookSignInSagaAction';

export function* facebookSignInSaga(action: FacebookSignInSagaAction) {
  const { callback } = action.payload;
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
