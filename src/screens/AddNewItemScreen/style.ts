import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type AddNewItemScreenStyleType = {
  container: ViewStyle;
  button: ViewStyle;
  buttonDis: ViewStyle;
  text: TextStyle;
  inputContainer: ViewStyle;
  loader: ViewStyle;
};

const button: ViewStyle = {
  width: '100%',
  height: 40,
  backgroundColor: COLORS.sapphire,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
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
  loader: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  button,
  buttonDis: {
    ...button,
    backgroundColor: COLORS.silver,
  },
  text: {
    fontSize: 18,
    color: COLORS.white,
  },
});
