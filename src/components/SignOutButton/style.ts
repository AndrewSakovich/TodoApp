import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type SignOutButtonStyleType = {
  btn: ViewStyle;
  font: TextStyle;
};

export const style = StyleSheet.create<SignOutButtonStyleType>({
  btn: {
    height: 40,
    backgroundColor: COLORS.sapphire,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.sapphire,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.white,
  },
});
