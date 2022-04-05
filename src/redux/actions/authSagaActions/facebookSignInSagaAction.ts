import { AuthSagaActions } from './index';

export type FacebookSignInSagaAction = {
  type: AuthSagaActions.FACEBOOK_SIGN_IN_SAGA;
  payload: FacebookSignInSagaActionPayload;
};
export type FacebookSignInSagaActionPayload = {
  callback: (flag: boolean) => void;
};
export const facebookSignInSagaAction = (
  payload: FacebookSignInSagaActionPayload,
) => {
  return {
    type: AuthSagaActions.FACEBOOK_SIGN_IN_SAGA,
    payload,
  };
};
