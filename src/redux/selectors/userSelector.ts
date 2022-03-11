import { ReduxStoreType, RootStateType } from '../store';

export const userSelector = (state: RootStateType) => {
  return state.auth.user;
};
