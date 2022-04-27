import { Alert, AlertButton } from 'react-native';

export type CreateErrorAlertMessageHelperParamsType = {
  title: string;
  message: string;
  cancelButtonTitle: AlertButton['text'];

  onPressCancel?: AlertButton['onPress'];
  onPress?: AlertButton['onPress'];
  confirmButtonTitle?: AlertButton['text'];
};

export const createAlertMessageHelper = (
  params: CreateErrorAlertMessageHelperParamsType,
) => {
  const {
    title,
    message,
    onPress,
    confirmButtonTitle,
    cancelButtonTitle,
    onPressCancel,
  } = params;

  const buttons: AlertButton[] = [
    {
      text: `${cancelButtonTitle}`,
      onPress: onPressCancel,
    },
  ];

  if (onPress) {
    buttons.push({
      text: `${confirmButtonTitle}`,
      onPress,
    });
  }

  return Alert.alert(`${title}`, `${message}`, [...buttons]);
};
