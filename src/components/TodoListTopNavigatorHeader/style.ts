import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type TodoListTopNavigatorHeaderStyleType = {
  header: ViewStyle;
  text: TextStyle;
};

export const style = StyleSheet.create<TodoListTopNavigatorHeaderStyleType>({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 45,
    backgroundColor: COLORS.sapphire,
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
  },
});
