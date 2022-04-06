import { Alert } from 'react-native';

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

  const buttons = onPress
    ? [
        {
          text: `${cancelButtonTitle}`,
        },
        {
          text: `${confirmButtonTitle}`,
          onPress: onPress,
        },
      ]
    : [
        {
          text: `${cancelButtonTitle}`,
        },
      ];

  return Alert.alert(`${title}`, `${message}`, [...buttons]);
};
