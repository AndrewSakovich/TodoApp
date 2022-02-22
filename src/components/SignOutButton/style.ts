import {StyleSheet} from 'react-native';
import {COLORS} from '../../COLORS';

export const style = StyleSheet.create({
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
    fontSize: 24,
    color: COLORS.white,
  },
});
