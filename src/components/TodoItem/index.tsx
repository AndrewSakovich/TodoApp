import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { TodoItemPropsType } from './types';
import { deleteItemSagaAction } from '../../redux/actions/todoSagaActions/deleteItemSagaAction';
import { doneItemSagaAction } from '../../redux/actions/todoSagaActions/doneItemSagaAction';
import PushNotification from 'react-native-push-notification';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../COLORS';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import { useNavigation } from '@react-navigation/native';
import { NAMESCREEN } from '../../navigators/nameScreen';
import { AddNewItemScreenNavigationProps } from '../../screens/AddNewItemScreen/type';
import { stopNotificationHelper } from '../../helpers/stopNotificationHelper';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const { todoItem, index } = props;

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

  const { width: screenWidth } = Dimensions.get('window');
  const translateDeleted = -screenWidth * 0.3;

  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < translateDeleted;
      if (shouldBeDismissed) {
        console.log(-screenWidth);
        translateX.value = -screenWidth;
        runOnJS(onPressDelete);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={style.container}>
      <View
        style={{
          height: 55,
          width: 55,
          position: 'absolute',
          right: '3%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesomeIcon icon={faTrashAlt} size={20} color={COLORS.red} />
      </View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[style.item, rStyle]}>
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
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
