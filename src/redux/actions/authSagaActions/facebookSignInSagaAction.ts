import { AuthSagaActions } from './index';

export type FacebookSignInSagaAction = {
  type: AuthSagaActions.FACEBOOK_SIGN_IN_SAGA;
};

export const facebookSignInSagaAction = () => {
  return {
    type: AuthSagaActions.FACEBOOK_SIGN_IN_SAGA,
  };
};
