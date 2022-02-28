import { TodoActionTypes } from './index';

export const signOutAction = () => {
  return {
    type: TodoActionTypes.SIGN_OUT,
  };
};

export type SignOutAction = {
  type: TodoActionTypes.SIGN_OUT;
};
