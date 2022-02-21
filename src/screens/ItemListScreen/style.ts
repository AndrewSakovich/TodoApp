import {StyleSheet, ViewStyle} from 'react-native';
import {Color} from '../../COLORS';

type ItemListStyleType = {
  container: ViewStyle;
};

export const style = StyleSheet.create<ItemListStyleType>({
  container: {
    borderTopWidth: 1,
    borderTopColor: Color.silver,
    paddingTop: 5,
    flex: 1,
  },
});
