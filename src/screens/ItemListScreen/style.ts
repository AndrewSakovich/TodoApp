import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type ItemListStyleType = {
  container: ViewStyle;
};

export const style = StyleSheet.create<ItemListStyleType>({
  container: {
    paddingTop: 5,
    flex: 1,
  },
});
