import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type SignInButtonStyle = {
  container: ViewStyle;
  btn: ViewStyle;
  font: TextStyle;
};

export const style = StyleSheet.create<SignInButtonStyle>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.sapphire,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.sapphire,
  },
});
