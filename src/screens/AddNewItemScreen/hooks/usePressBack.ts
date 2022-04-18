import { useCallback } from 'react';
import { createAlertMessageHelper } from '../../../helpers/createAlertMessageHelper';
import { useNavigation } from '@react-navigation/native';
import { AddNewItemScreenNavigationProps } from '../type';

export type UsePressBack = (hasUnsavedChanges: boolean) => void;

export const usePressBack: UsePressBack = (hasUnsavedChanges: boolean) => {
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();

  return useCallback(() => {
    const back = () => {
      return navigation.goBack();
    };
    if (hasUnsavedChanges) {
      return createAlertMessageHelper({
        onPress: back,
        title: 'Discard changes?',
        message:
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
        confirmButtonTitle: 'Discard',
        cancelButtonTitle: "Don't leave",
      });
    }

    return back();
  }, [hasUnsavedChanges]);
};
