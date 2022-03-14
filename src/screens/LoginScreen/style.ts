import { StyleSheet, ViewStyle } from 'react-native';

type LoginScreenStylesType = {
  container: ViewStyle;
};
export const style = StyleSheet.create<LoginScreenStylesType>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
