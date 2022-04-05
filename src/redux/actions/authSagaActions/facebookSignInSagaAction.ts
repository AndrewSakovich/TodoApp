import { AuthSagaActions } from './index';
import React from 'react';

export type FacebookSignInSagaAction = {
  type: AuthSagaActions.FACEBOOK_SIGN_IN_SAGA;
  payload: FacebookSignInSagaActionPayload;
};
export type FacebookSignInSagaActionPayload = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const facebookSignInSagaAction = (
  payload: FacebookSignInSagaActionPayload,
) => {
  return {
    type: AuthSagaActions.FACEBOOK_SIGN_IN_SAGA,
    payload,
  };
};
