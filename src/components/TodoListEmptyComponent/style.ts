import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type TodoListEmptyComponentStyleType = {
  container: ViewStyle;
  text: TextStyle;
};

export const style = StyleSheet.create<TodoListEmptyComponentStyleType>({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
