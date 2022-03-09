import { AuthActionsTypes } from '../actions/authActions';
import { SignInPayload } from '../actions/authActions/successSignInAction';

export type AuthReducerState = {
  userToken: SignInPayload['userToken'] | null;
  user: SignInPayload['user'];
};

const initialState: AuthReducerState = {
  userToken: null,
  user: undefined,
};

export const authReducer = (
  state = initialState,
  action: any,
): AuthReducerState => {
  switch (action.type) {
    case AuthActionsTypes.SIGN_IN: {
      const { user, userToken }: SignInPayload = action.payload;
      return {
        ...state,
        userToken,
        user,
      };
    }
    case AuthActionsTypes.SIGN_OUT: {
      return {
        ...state,
        userToken: null,
      };
    }
  }
  return state;
};
