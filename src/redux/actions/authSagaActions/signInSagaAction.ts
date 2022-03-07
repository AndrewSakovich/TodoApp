import { AuthSagaActions } from './index';

export type SignInSagaAction = {
  type: AuthSagaActions.SIGN_IN_SAGA;
};

export const signInSagaAction = () => {
  return {
    type: AuthSagaActions.SIGN_IN_SAGA,
  };
};
