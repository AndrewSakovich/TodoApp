import { Dispatch } from 'redux';

export type SignInButtonPropsType = {
  signIn: SignInType;
};
type SignInType = {
  signInMethod: any;
  title: string;
};
