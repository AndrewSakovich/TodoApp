import { Alert } from 'react-native';

export const createErrorAlertMessageHelper = (
  alertMessage: string,
  alertTitle = 'Something went wrong',
) => {
  return Alert.alert(`${alertTitle}`, `${alertMessage}`, [
    {
      text: 'Cancel',
    },
  ]);
};
