import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { put } from 'redux-saga/effects';
import { successSignInAction } from '../actions/authActions/successSignInAction';
import { AuthReducerState } from '../reducers/authReducer';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import messaging from '@react-native-firebase/messaging';

export type CheckUsersSagaType = {
  userToken: AuthReducerState['userToken'];
  user: AuthReducerState['user'];
};

export function* checkUsersSaga(
  userToken: CheckUsersSagaType['userToken'],
  user: CheckUsersSagaType['user'],
) {
  try {
    const deviceToken: string = yield messaging().getToken();
    const usersData: FirebaseDatabaseTypes.DataSnapshot =
      yield createReferenceHelper.ref(`/Users/`).once('value');
    const users = Object.keys(usersData.val() ?? {});
    const checkUser = users.find(item => {
      return item === userToken;
    });

    if (checkUser) {
      yield put(successSignInAction({ userToken, user, deviceToken }));
    } else {
      yield createReferenceHelper
        .ref(`/Users/`)
        .child(`${userToken}`)
        .set(userToken);

      yield put(successSignInAction({ userToken, user, deviceToken }));
    }
  } catch (error: any) {
    createAlertMessageHelper({
      message: `${error.message}`,
      title: 'Something went wrong',
      cancelButtonTitle: 'Cancel',
    });
  }
}
