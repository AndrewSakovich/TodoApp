import { AuthActionsTypes } from '../actions/authActions';
import { SuccessSignInPayload } from '../actions/authActions/successSignInAction';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type AuthReducerState = {
  userToken: FirebaseAuthTypes.User['uid'] | null;
  user?: FirebaseAuthTypes.UserCredential['user'];
  deviceToken: string;
};

const initialState: AuthReducerState = {
  userToken: null,
  user: undefined,
  deviceToken: '',
};

export const authReducer = (
  state = initialState,
  action: any,
): AuthReducerState => {
  switch (action.type) {
    case AuthActionsTypes.SIGN_IN: {
      const { user, userToken, deviceToken }: SuccessSignInPayload =
        action.payload;
      return {
        ...state,
        userToken,
        user,
        deviceToken,
      };
    }
    case AuthActionsTypes.SIGN_OUT: {
      return initialState;
    }
  }
  return state;
};
