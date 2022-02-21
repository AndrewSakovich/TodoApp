import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Color} from '../../COLORS';

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
    backgroundColor: Color.sapphire,
    justifyContent: 'space-between',
  },
  text: {
    color: Color.white,
    fontSize: 18,
  },
});
