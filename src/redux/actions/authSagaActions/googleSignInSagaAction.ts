import { AuthSagaActions } from './index';

export type GoogleSignInSagaAction = {
  type: AuthSagaActions.GOOGLE_SIGN_IN_SAGA;
};

export const googleSignInSagaAction = () => {
  return {
    type: AuthSagaActions.GOOGLE_SIGN_IN_SAGA,
  };
};
