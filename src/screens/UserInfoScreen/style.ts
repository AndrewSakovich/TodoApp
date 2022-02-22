import {StyleSheet} from 'react-native';
import {COLORS} from '../../COLORS';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  itemInfo: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.silver,
    borderBottomStyle: 'solid',
  },

  font: {
    fontWeight: 'normal',
    fontSize: 15,
    color: COLORS.sapphire,
  },
  fontBold: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.sapphire,
  },
  nameFont: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.sapphire,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
