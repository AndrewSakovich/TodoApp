import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../COLORS';

type TodoItemStyleType = {
  item: ViewStyle;
  itemChanges: ViewStyle;
  text: TextStyle;
  doneText: TextStyle;
  touchDone: ViewStyle;
  editing: ViewStyle;
  container: ViewStyle;
  iconContainer: ViewStyle;
};

export const style = StyleSheet.create<TodoItemStyleType>({
  container: {
    marginHorizontal: 10,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
  },
  iconContainer: {
    height: 60,
    right: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    flexDirection: 'row',
  },
  item: {
    height: 60,
    backgroundColor: COLORS.sapphire,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
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
