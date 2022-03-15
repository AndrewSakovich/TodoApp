export type SignInButtonPropsType = {
  signIn: SignInType;
};
type SignInType = {
  signInMethod(): void;
  title: string;
  typeStyle: boolean;
};
