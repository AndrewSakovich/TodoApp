import { AuthActionsTypes } from './index';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthReducerState } from '../../reducers/authReducer';

export const successSignInAction = (payload: SignInPayload) => {
  return {
    type: AuthActionsTypes.SIGN_IN,
    payload,
  };
};

export type SignInPayload = {
  userToken: AuthReducerState['userToken'];
  user: AuthReducerState['user'];
};

export type SignInAction = {
  type: AuthActionsTypes.SIGN_IN;
  payload: SignInPayload;
};
