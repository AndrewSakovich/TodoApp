import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { TodoItemPropsType } from './types';
import { deleteItemSagaAction } from '../../redux/actions/todoSagaActions/deleteItemSagaAction';
import { doneItemSagaAction } from '../../redux/actions/todoSagaActions/doneItemSagaAction';
import PushNotification from 'react-native-push-notification';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const {
    todoItem: { id, text, isDone, notificationId },
  } = props;

  const dispatch = useDispatch();

  const textStyle = isDone ? style.doneText : style.text;

  const onPressDone = () => {
    PushNotification.cancelLocalNotification(`${notificationId}`);

    dispatch(doneItemSagaAction({ id, isDone }));
  };

  const onPressDelete = () => {
    PushNotification.cancelLocalNotification(`${notificationId}`);

    Alert.alert('Delete task', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(deleteItemSagaAction({ id }));
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
