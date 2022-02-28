import { StyleSheet } from 'react-native';
import { COLORS } from '../../COLORS';

export const style = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.sapphire,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
  },
  doneText: {
    color: COLORS.white,
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  delete: {
    color: COLORS.white,
  },
  touch: {
    flex: 1,
  },
});
