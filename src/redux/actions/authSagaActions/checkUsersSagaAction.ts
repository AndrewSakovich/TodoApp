import { AuthSagaActions } from './index';
import { AuthReducerState } from '../../reducers/authReducer';

export type CheckUsersSagaAction = {
  type: AuthSagaActions.CHECK_FIREBASE_USERS_SAGA;
  payload: CheckFirebaseUsersSagaActionPayload;
};
export type CheckFirebaseUsersSagaActionPayload = {
  userToken: AuthReducerState['userToken'];
  user: AuthReducerState['user'];
};

export const checkFirebaseUsersSagaAction = (
  payload: CheckFirebaseUsersSagaActionPayload,
) => {
  return {
    type: AuthSagaActions.CHECK_FIREBASE_USERS_SAGA,
    payload,
  };
};
