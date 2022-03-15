import { LoginScreenStylesType } from '../../screens/LoginScreen/style';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type SignInButtonPropsType = {
  signIn: SignInType;
};
type SignInType = {
  signInMethod(): void;
  title: string;
  styleFont:
    | LoginScreenStylesType['fontFacebook']
    | LoginScreenStylesType['fontGoogle'];
  styleContainer:
    | LoginScreenStylesType['googleButton']
    | LoginScreenStylesType['facebookButton'];
  icon: IconDefinition;
  iconColor: string;
};
