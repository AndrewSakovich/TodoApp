import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TextStyle, ViewStyle } from 'react-native';

export type SignInButtonPropsType = {
  options: SignInButtonOptionsType;
  disable: boolean;
};
type SignInButtonOptionsType = {
  signInMethod(): void;
  title: string;
  styleFont: TextStyle;
  styleContainer: ViewStyle;
  icon: IconDefinition;
  iconColor: string;
};
