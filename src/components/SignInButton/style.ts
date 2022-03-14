import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type SignInButtonStyle = {
  fontGoogle: TextStyle;
  fontFb: TextStyle;
};

export const style = StyleSheet.create<SignInButtonStyle>({
  fontGoogle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.sapphire,
  },
  fontFb: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.sapphire,
  },
});
