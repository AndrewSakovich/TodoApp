import { StyleSheet, ViewStyle } from 'react-native';

type LoginScreenStylesType = {
  container: ViewStyle;
};
export const style = StyleSheet.create<LoginScreenStylesType>({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
});
