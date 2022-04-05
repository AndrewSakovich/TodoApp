import { StyleSheet, ViewStyle } from 'react-native';

type ItemListStyleType = {
  container: ViewStyle;
  loader: ViewStyle;
};

export const style = StyleSheet.create<ItemListStyleType>({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
