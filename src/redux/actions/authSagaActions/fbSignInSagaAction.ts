import { AuthSagaActions } from './index';

export type FbSignInSagaAction = {
  type: AuthSagaActions.FB_SIGN_IN_SAGA;
};

export const fbSignInSagaAction = () => {
  return {
    type: AuthSagaActions.FB_SIGN_IN_SAGA,
  };
};
