import PushNotification from 'react-native-push-notification';
import { AuthReducerState } from '../redux/reducers/authReducer';
import { TodoItemType } from '../models';

export type CreateNotificationHelperPropsType = {
  channelId: AuthReducerState['deviceToken'];
  newItem: TodoItemType;
};

export const createNotificationHelper = (
  props: CreateNotificationHelperPropsType,
) => {
  const { channelId, newItem } = props;

  return PushNotification.localNotificationSchedule({
    channelId: channelId,
    id: newItem.notificationId,
    message: `your task: ${newItem.text}, not implemented`,
    date: new Date(Date.now() + 5 * 1000),
    allowWhileIdle: false,
    repeatTime: 1,
  });
};
