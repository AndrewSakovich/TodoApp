import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Color} from '../../COLORS';

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
    borderColor: Color.sapphire,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: Color.cararra,
    height: 40,
  },
  text: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: Color.black,
  },
  button: {
    margin: 5,
    height: 40,
    backgroundColor: Color.sapphire,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Color.sapphire,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDis: {
    height: 40,
    backgroundColor: Color.silver,
    borderRadius: 5,
    borderColor: Color.sapphire,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 18,
    color: Color.white,
  },
  registr: {
    alignItems: 'center',
    color: Color.silver,
  },
});
