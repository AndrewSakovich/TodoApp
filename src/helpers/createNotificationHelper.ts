import PushNotification from 'react-native-push-notification';
import { AuthReducerState } from '../redux/reducers/authReducer';
import { TodoItemType } from '../models';
import { Platform } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export type CreateNotificationHelperDataType = {
  channelId: AuthReducerState['deviceToken'];
  newItem: TodoItemType;
  date: Date;
};

export const createNotificationHelper = (
  notificationData: CreateNotificationHelperDataType,
) => {
  const { channelId, newItem, date } = notificationData;

  if (Platform.OS === 'ios') {
    PushNotification.configure({
      onRegister: ({ token }) => {
        return token;
      },
      onNotification: notification => {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: true,
      permissions: {
        alert: true,
        badge: false,
        sound: false,
      },
    });

    PushNotification.createChannel(
      {
        channelId: channelId,
        channelName: 'Task reminder notifications',
        channelDescription: 'Reminder for any tasks',
      },
      () => {},
    );

    return PushNotificationIOS.addNotificationRequest({
      id: newItem.notificationId,
      body: `your task: ${newItem.text}, not implemented`,
      fireDate: date,
      repeats: false,
    });
  }

  return PushNotification.localNotificationSchedule({
    channelId: channelId,
    id: newItem.notificationId,
    message: `your task: ${newItem.text}, not implemented`,
    date: date,
    allowWhileIdle: false,
    repeatTime: 1,
  });
};
