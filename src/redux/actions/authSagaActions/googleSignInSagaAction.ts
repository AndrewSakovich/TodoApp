import { AuthSagaActions } from './index';
import React from 'react';

export type GoogleSignInSagaAction = {
  type: AuthSagaActions.GOOGLE_SIGN_IN_SAGA;
  payload: GoogleSignInSagaActionPayload;
};
export type GoogleSignInSagaActionPayload = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const googleSignInSagaAction = (
  payload: GoogleSignInSagaActionPayload,
) => {
  return {
    type: AuthSagaActions.GOOGLE_SIGN_IN_SAGA,
    payload,
  };
};
