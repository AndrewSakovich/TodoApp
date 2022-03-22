import PushNotification from 'react-native-push-notification';

const createNotificationHelper = channelId => {
  return PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    channelId,
    message: 'My Notification Message', // (required)
    date: new Date(Date.now() + 10 * 1000), // in 60 secs
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

    repeatTime: 1,
  });
};
