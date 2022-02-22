import {StyleSheet} from 'react-native';
import {COLORS} from '../../COLORS';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  info: {
    margin: 10,
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  font: {
    fontWeight: 'normal',
    fontSize: 15,
    color: COLORS.sapphire,
  },
});
