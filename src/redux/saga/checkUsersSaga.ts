import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { put } from 'redux-saga/effects';
import { successSignInAction } from '../actions/authActions/successSignInAction';
import { CheckUsersSagaAction } from '../actions/authSagaActions/checkUsersSagaAction';

export function* checkUsersSaga(action: CheckUsersSagaAction) {
  const { userToken, user } = action.payload;
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
}
