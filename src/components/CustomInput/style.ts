import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type CustomInputStyleType = {
  input: ViewStyle;
};

export const style = StyleSheet.create<CustomInputStyleType>({
  input: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.sapphire,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: COLORS.cararra,
    height: 50,
    marginTop: 10,
  },
});
