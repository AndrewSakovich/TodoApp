import { AuthActionsTypes } from './index';

export const signOutAction = () => {
  return {
    type: AuthActionsTypes.SIGN_OUT,
  };
};

export type SignOutAction = {
  type: AuthActionsTypes.SIGN_OUT;
};
