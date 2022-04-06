import { AuthSagaActions } from './index';

export type GoogleSignInSagaAction = {
  type: AuthSagaActions.GOOGLE_SIGN_IN_SAGA;
  payload: GoogleSignInSagaActionPayload;
};

export type GoogleSignInSagaActionPayload = {
  callback: () => void;
};

export const googleSignInSagaAction = (
  payload: GoogleSignInSagaActionPayload,
) => {
  return {
    type: AuthSagaActions.GOOGLE_SIGN_IN_SAGA,
    payload,
  };
};
