import { Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { deleteItemAction } from '../../redux/actions/todoActions/deleteItemAction';
import { TodoItemPropsType } from './types';
import { doneItemAction } from '../../redux/actions/todoActions/doneItemAction';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const {
    todoItem: { id, text, isDone },
  } = props;

  const dispatch = useDispatch();

  const textStyle = isDone ? style.doneText : style.text;

  const onPressDone = () => {
    dispatch(doneItemAction({ id }));
  };

  const onPressDelete = () => {
    Alert.alert('Delete task', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(deleteItemAction({ id, isDone }));
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
