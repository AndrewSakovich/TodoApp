import PushNotification from "react-native-push-notification";
import { AuthReducerState } from "../redux/reducers/authReducer";
import { TodoItemType } from "../models";
import { Platform } from "react-native";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

export type CreateNotificationHelperDataType = {
  channelId: AuthReducerState["deviceToken"];
  newItem: TodoItemType;
};

export const createNotificationHelper = (
  notificationData: CreateNotificationHelperDataType
) => {
  const { channelId, newItem } = notificationData;

  if (Platform.OS === "ios") {

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        // console.log('TOKEN:', token);
      },
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: true,
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: false,
        sound: false
      }
    });

    PushNotification.createChannel(
      {
        channelId: channelId, // (required)
        channelName: "Task reminder notifications", // (required)
        channelDescription: "Reminder for any tasks"
      },
      () => {
      }
    );

    return PushNotificationIOS.addNotificationRequest({
      id: newItem.notificationId,
      body: `your task: ${newItem.text}, not implemented`,
      fireDate: date,
      repeats: false
    });
  }

  return PushNotification.localNotificationSchedule({
    channelId: channelId,
    id: newItem.notificationId,
    message: `your task: ${newItem.text}, not implemented`,
    date: new Date(Date.now() + 5 * 1000),
    allowWhileIdle: false,
    repeatTime: 1
  });
};
