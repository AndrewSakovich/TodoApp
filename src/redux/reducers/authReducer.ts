import { AuthActionsTypes } from '../actions/authActions';
import { SignInPayload } from '../actions/authActions/successSignInAction';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type AuthReducerState = {
  userToken: FirebaseAuthTypes.User['uid'] | null;
  user?: FirebaseAuthTypes.UserCredential['user'];
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
        ...initialState,
      };
    }
  }
  return state;
};
