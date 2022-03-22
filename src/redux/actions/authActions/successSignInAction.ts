import { AuthActionsTypes } from './index';
import { AuthReducerState } from '../../reducers/authReducer';

export const successSignInAction = (payload: SuccessSignInPayload) => {
  return {
    type: AuthActionsTypes.SIGN_IN,
    payload,
  };
};

export type SuccessSignInPayload = {
  userToken: AuthReducerState['userToken'];
  user: AuthReducerState['user'];
  deviceToken: string;
};

export type SuccessSignInAction = {
  type: AuthActionsTypes.SIGN_IN;
  payload: SuccessSignInPayload;
};
