import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

export type LoginScreenStylesType = {
  container: ViewStyle;
  button: ViewStyle;
  googleButton: ViewStyle;
  facebookButton: ViewStyle;
  fontFacebook: TextStyle;
  fontGoogle: TextStyle;
  font: TextStyle;
  img: ImageStyle;
  loader: ViewStyle;
};
export const style = StyleSheet.create<LoginScreenStylesType>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  img: {
    height: 150,
    width: 150,
    margin: 50,
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
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
});
