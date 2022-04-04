import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type AddNewItemScreenStyleType = {
  container: ViewStyle;
  button: ViewStyle;
  buttonDis: ViewStyle;
  text: TextStyle;
  textDis: TextStyle;
  inputContainer: ViewStyle;
};

export const style = StyleSheet.create<AddNewItemScreenStyleType>({
  container: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  inputContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
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
    width: '100%',
    height: 40,
    backgroundColor: COLORS.silver,
    borderRadius: 5,
    borderColor: COLORS.sapphire,
    alignItems: 'center',
    justifyContent: 'center',
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
