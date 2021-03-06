import { Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { TodoItemPropsType } from './types';
import { deleteItemSagaAction } from '../../redux/actions/todoSagaActions/deleteItemSagaAction';
import { doneItemSagaAction } from '../../redux/actions/todoSagaActions/doneItemSagaAction';
import PushNotification from 'react-native-push-notification';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../COLORS';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import { useNavigation } from '@react-navigation/native';
import { NAMESCREEN } from '../../navigators/nameScreen';
import { AddNewItemScreenNavigationProps } from '../../screens/AddNewItemScreen/type';
import { stopNotificationHelper } from '../../helpers/stopNotificationHelper';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const { todoItem } = props;

  const { id, text, isDone, notificationId } = todoItem;

  const dispatch = useDispatch();
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();

  const textStyle = isDone ? style.doneText : style.text;

  const onPressDone = () => {
    stopNotificationHelper(notificationId);
    PushNotification.cancelLocalNotification(`${notificationId}`);
    dispatch(doneItemSagaAction({ id, isDone }));
  };

  const onPressDelete = () => {
    const onPress = () => {
      stopNotificationHelper(notificationId);
      dispatch(deleteItemSagaAction({ id }));
    };

    createAlertMessageHelper({
      onPress,
      title: 'Delete task',
      message: 'Are you sure?',
      cancelButtonTitle: 'Cancel',
      confirmButtonTitle: 'OK',
    });
  };

  const onPressEditing = () => {
    navigation.navigate(NAMESCREEN.ADD_NEW_ITEM_SCREEN, {
      isEdit: true,
      editItem: todoItem,
    });
  };

  return (
    <View style={style.item}>
      <TouchableOpacity style={style.touchDone} onPress={onPressDone}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
      <View style={style.itemChanges}>
        {!isDone && (
          <TouchableOpacity style={style.editing} onPress={onPressEditing}>
            <FontAwesomeIcon icon={faPen} size={15} color={COLORS.white} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onPressDelete}>
          <FontAwesomeIcon icon={faTrash} size={15} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
