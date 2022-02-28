import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type AddNewItemScreenStyleType = {
  container: ViewStyle;
  button: ViewStyle;
  buttonDis: ViewStyle;
  input: ViewStyle;
  text: TextStyle;
  textDis: TextStyle;
};

export const style = StyleSheet.create<AddNewItemScreenStyleType>({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: COLORS.sapphire,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.sapphire,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDis: {
    height: 40,
    backgroundColor: COLORS.silver,
    borderRadius: 5,
    borderColor: COLORS.sapphire,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.sapphire,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: COLORS.cararra,
    height: 40,
  },
  text: {
    fontSize: 18,
    color: COLORS.white,
  },
  textDis: {
    fontSize: 18,
    color: COLORS.lemonGrass,
  },
});
