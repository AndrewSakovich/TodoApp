import { put } from 'redux-saga/effects';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { signInAction } from '../actions/authActions/signInAction';

export function* helloSaga() {
  const { idToken } = yield GoogleSignin.signIn();
  console.log('IDTOKEN', idToken);
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  const { user } = yield auth().signInWithCredential(googleCredential);
  console.log('USER', user);

  const userToken = user.uid;
  yield createReferenceHelper
    .ref(`/Users/`)
    .child(`${userToken}`)
    .set(userToken);

  yield put(signInAction({ userToken, user }));
}
