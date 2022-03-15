import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

export type LoginScreenStylesType = {
  container: ViewStyle;
  googleButton: ViewStyle;
  facebookButton: ViewStyle;
  fontFacebook: ViewStyle;
  fontGoogle: ViewStyle;
};
export const style = StyleSheet.create<LoginScreenStylesType>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    width: '100%',
    backgroundColor: COLORS.dawnPink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookButton: {
    width: '100%',
    backgroundColor: COLORS.catskillWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
