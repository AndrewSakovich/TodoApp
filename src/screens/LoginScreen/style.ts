import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

export type LoginScreenStylesType = {
  container: ViewStyle;
  button: ViewStyle;
  googleButton: ViewStyle;
  facebookButton: ViewStyle;
  fontFacebook: TextStyle;
  fontGoogle: TextStyle;
  font: TextStyle;
};
export const style = StyleSheet.create<LoginScreenStylesType>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: COLORS.dawnPink,
  },
  facebookButton: {
    backgroundColor: COLORS.catskillWhite,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
  },
  fontGoogle: {
    color: COLORS.punch,
  },
  fontFacebook: {
    color: COLORS.sanMarino,
  },
});
