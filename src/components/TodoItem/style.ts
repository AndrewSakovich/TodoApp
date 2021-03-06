import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type TodoItemStyleType = {
  item: ViewStyle;
  itemChanges: ViewStyle;
  text: TextStyle;
  doneText: TextStyle;
  touchDone: ViewStyle;
  editing: ViewStyle;
};

export const style = StyleSheet.create<TodoItemStyleType>({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.sapphire,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  editing: {
    marginRight: 7,
  },
  itemChanges: {
    flexDirection: 'row',
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
  },
  doneText: {
    color: COLORS.white,
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  touchDone: {
    flex: 1,
  },
});
