import PushNotification from 'react-native-push-notification';
import { AuthReducerState } from '../redux/reducers/authReducer';
import { TodoItemType } from '../models';

export type CreateNotificationHelperDataType = {
  channelId: AuthReducerState['deviceToken'];
  newItem: TodoItemType;
  date: Date;
};

export const createNotificationHelper = (
  notificationData: CreateNotificationHelperDataType,
) => {
  const { channelId, newItem, date } = notificationData;

  return PushNotification.localNotificationSchedule({
    channelId: channelId,
    id: newItem.notificationId,
    message: `your task: ${newItem.text}, not implemented`,
    date: date,
    allowWhileIdle: false,
    repeatTime: 1,
  });
};
