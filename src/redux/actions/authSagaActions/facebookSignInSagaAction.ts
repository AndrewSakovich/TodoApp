import { AuthSagaActions } from './index';

export type FacebookSignInSagaAction = {
  type: AuthSagaActions.FB_SIGN_IN_SAGA;
};

export const facebookSignInSagaAction = () => {
  return {
    type: AuthSagaActions.FB_SIGN_IN_SAGA,
  };
};
