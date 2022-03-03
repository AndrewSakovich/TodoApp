import { AuthActionsTypes } from './index';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const signInAction = (payload: SignInPayload) => {
  return {
    type: AuthActionsTypes.SIGN_IN,
    payload,
  };
};

export type SignInPayload = {
  userToken: FirebaseAuthTypes.User['uid'] | null;
  user: FirebaseAuthTypes.UserCredential['user'];
};

export type SignInAction = {
  type: AuthActionsTypes.SIGN_IN;
  payload: SignInPayload;
};
