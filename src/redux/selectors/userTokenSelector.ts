import { RootStateType } from '../store';

export const userTokenSelector = (state: RootStateType) => {
  return state.auth.userToken;
};
