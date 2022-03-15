import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type SignInButtonStyle = {
  fontGoogle: TextStyle;
  fontFacebook: TextStyle;
};

export const style = StyleSheet.create<SignInButtonStyle>({
  fontGoogle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.punch,
    padding: 10,
  },
  fontFacebook: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.sanMarino,
    padding: 10,
  },
});
