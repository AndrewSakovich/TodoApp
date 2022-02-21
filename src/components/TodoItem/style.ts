import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3949ab',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  doneText: {
    color: '#FFFFFF',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  delete: {
    color: '#FFFFFF',
  },
  touch: {
    flex: 1,
  },
});
