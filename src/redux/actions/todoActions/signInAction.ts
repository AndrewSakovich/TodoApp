import {TodoActionTypes} from './index';

export const signInAction = (payload: SignInPayload) => {
  return {
    type: TodoActionTypes.SIGN_IN,
    payload,
  };
};

export type SignInPayload = {
  token: string;
};

export type SignInAction = {
  type: TodoActionTypes.SIGN_IN;
  payload: SignInPayload;
};
