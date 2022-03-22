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
    //... You can use all the options from localNotifications
    channelId: channelId,
    id: newItem.notificationId,
    message: `your task: ${newItem.text}, not implemented`, // (required)
    date: new Date(Date.now() + 5 * 1000), // in 60 secs
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

    repeatTime: 1,
  });
};
