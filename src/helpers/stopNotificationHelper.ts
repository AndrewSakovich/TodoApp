import { Platform } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import { TodoItemType } from '../models';

export const stopNotificationHelper = (
  notificationId: TodoItemType['notificationId'],
) => {
  if (Platform.OS === 'ios') {
    return PushNotificationIOS.removePendingNotificationRequests([
      `${notificationId}`,
    ]);
  }
  return PushNotification.cancelLocalNotification(`${notificationId}`);
};
