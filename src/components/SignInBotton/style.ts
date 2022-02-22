import { StyleSheet } from 'react-native';
import { COLORS } from '../../COLORS';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.sapphire,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.sapphire,
  },
});
