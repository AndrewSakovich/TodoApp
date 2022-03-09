import { ReduxStoreType } from '../store';

export const userSelector = (state: ReduxStoreType) => {
  return state.auth.user;
};
