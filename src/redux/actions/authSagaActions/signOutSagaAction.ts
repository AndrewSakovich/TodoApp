import { AuthSagaActions } from './index';

export type SignOutSagaAction = {
  type: AuthSagaActions.SIGN_OUT_SAGA;
};

export const signOutSagaAction = () => {
  return {
    type: AuthSagaActions.SIGN_OUT_SAGA,
  };
};
