import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../COLORS';

type LoginScreenStylesType = {
  container: ViewStyle;
  input: ViewStyle;
  text: TextStyle;
  button: ViewStyle;
  buttonDis: ViewStyle;
  loginText: TextStyle;
  registr: ViewStyle;
};
export const style = StyleSheet.create<LoginScreenStylesType>({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
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
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: COLORS.black,
  },
  button: {
    margin: 5,
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
  loginText: {
    fontSize: 18,
    color: COLORS.white,
  },
  registr: {
    alignItems: 'center',
    color: COLORS.silver,
  },
});
