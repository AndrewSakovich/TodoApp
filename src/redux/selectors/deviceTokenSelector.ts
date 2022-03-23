import { RootStateType } from '../store';

export const deviceTokenSelector = (state: RootStateType) => {
  return state.auth.deviceToken;
};
