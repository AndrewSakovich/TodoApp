import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { TodoItemPropsType } from './types';
import { deleteItemSagaAction } from '../../redux/actions/todoSagaActions/deleteItemSagaAction';
import { doneItemSagaAction } from '../../redux/actions/todoSagaActions/doneItemSagaAction';
import PushNotification from 'react-native-push-notification';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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

const { width: screenWidth } = Dimensions.get('window');

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

  const translateX = useSharedValue(0);
  const height = useSharedValue(60);
  const marginVertical = useSharedValue(5);
  const marginHorizontal = useSharedValue(5);
  const opacity = useSharedValue(1);
  const widthIcon = useSharedValue(0);

  const translateDeleted = -screenWidth * 0.3;

  const onPressDelete = () => {
    const onPressCancel = () => {
      marginHorizontal.value = 5;
      translateX.value = withTiming(0);
    };
    const onPress = () => {
      translateX.value = withTiming(-screenWidth);
      widthIcon.value = withTiming(-screenWidth);
      opacity.value = withTiming(0);
      height.value = withTiming(0, { duration: 1000 });
      marginVertical.value = withTiming(0);
      stopNotificationHelper(notificationId);
      dispatch(deleteItemSagaAction({ id }));
    };

    createAlertMessageHelper({
      onPressCancel,
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

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      widthIcon.value = event.translationX < 0 ? -screenWidth * 0.9 : 0;
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < translateDeleted;
      if (shouldBeDismissed) {
        return runOnJS(onPressDelete)();
      }
      marginHorizontal.value = 5;
      translateX.value = withTiming(0);
    },
  });

  const rItemStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  }, []);

  const rIconStyle = useAnimatedStyle(() => {
    const opacity = withSpring(translateX.value ? 1 : 0);
    return {
      opacity,
      width: -widthIcon.value,
      paddingRight: 20 + Math.abs(translateX.value) / 3,
    };
  }, []);

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      marginVertical: marginVertical.value,
      marginHorizontal: marginHorizontal.value,
      opacity: opacity.value,
    };
  }, []);

  return (
    <Animated.View style={[style.container, rContainerStyle]}>
      <Animated.View style={[style.iconContainer, rIconStyle]}>
        <FontAwesomeIcon icon={faTrashAlt} size={20} color={COLORS.white} />
      </Animated.View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[style.item, rItemStyle]}>
          <TouchableOpacity style={style.touchDone} onPress={onPressDone}>
            <Text style={textStyle}>{text}</Text>
          </TouchableOpacity>
          <View style={style.itemChanges}>
            {!isDone && (
              <TouchableOpacity style={style.editing} onPress={onPressEditing}>
                <FontAwesomeIcon icon={faPen} size={15} color={COLORS.white} />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};
