import { ReduxStoreType } from '../store';

export const userTokenSelector = (state: ReduxStoreType) => {
  return state.auth.userToken;
};
