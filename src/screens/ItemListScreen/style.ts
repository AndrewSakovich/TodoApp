import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../../COLOR';

type ItemListStyleType = {
  container: ViewStyle;
};

export const style = StyleSheet.create<ItemListStyleType>({
  container: {
    borderTopWidth: 1,
    borderTopColor: COLORS.silver,
    paddingTop: 5,
    flex: 1,
  },
});
