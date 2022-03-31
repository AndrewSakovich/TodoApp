import { call } from "redux-saga/effects";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { createErrorAlertMessageHelper } from "../../helpers/createErrorAlertMessageHelper";
import { checkUsersSaga } from "./checkUsersSaga";

export function* googleSignInSaga() {
  try {
    const { idToken } = yield GoogleSignin.signIn();
    // Create a Google credential with the accessToken
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const { user } = yield auth().signInWithCredential(googleCredential);
    console.log(user);
    const userToken = user.uid;
    yield call(checkUsersSaga, userToken, user);
  } catch (error: any) {
    createErrorAlertMessageHelper(`${error.message}`, "Login error");
  }
}
