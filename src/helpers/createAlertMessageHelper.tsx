import { Alert, AlertButton } from 'react-native';

export type CreateErrorAlertMessageHelperParamsType = {
  title: string;
  message: string;
  cancelButtonTitle: string;

  onPress?: () => void;
  confirmButtonTitle?: string;
};

export const createAlertMessageHelper = (
  params: CreateErrorAlertMessageHelperParamsType,
) => {
  const { title, message, onPress, confirmButtonTitle, cancelButtonTitle } =
    params;

  const buttons: AlertButton[] = [
    {
      text: `${cancelButtonTitle}`,
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
