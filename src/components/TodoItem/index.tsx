import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { TodoItemPropsType } from './types';
import { TodoSagaActions } from '../../redux/actions/todoSagaActions';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const {
    todoItem: { id, text, isDone },
  } = props;

  const dispatch = useDispatch();

  const textStyle = isDone ? style.doneText : style.text;

  const onPressDone = () => {
    dispatch({ type: TodoSagaActions.DONE_ITEM_SAGA, id });
  };

  const onPressDelete = () => {
    Alert.alert('Delete task', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch({ type: TodoSagaActions.DELETE_ITEM_SAGA, id });
        },
      },
    ]);
  };

  return (
    <View style={style.item}>
      <TouchableOpacity style={style.touch} onPress={onPressDone}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
      <Text style={style.delete} onPress={onPressDelete}>
        {'DELETE'}
      </Text>
    </View>
  );
};
