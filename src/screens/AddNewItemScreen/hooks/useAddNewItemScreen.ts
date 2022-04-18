import { useTextInput, UseTextInputReturn } from '../../../hooks/useTextInput';
import { usePress, UsePressReturn } from './usePress';
import { TodoItemType } from '../../../models';
import { usePressBack } from './usePressBack';

export type UseAddNewItemScreenParams = {
  editItem: TodoItemType;
  isEdit: boolean;
  date: Date;
  initialDate: Date;
};

type UseAddNewItemScreenReturn = {
  hasUnsavedChanges: boolean;
  onPressBack: () => void;
  textInputProps: UseTextInputReturn;
  pressParams: UsePressReturn;
};

export type UseAddNewItemScreen = (
  params: UseAddNewItemScreenParams,
) => UseAddNewItemScreenReturn;

export const useAddNewItemScreen = (params: UseAddNewItemScreenParams) => {
  const { editItem, isEdit, date, initialDate } = params;
  const initialText = editItem?.text ?? '';

  const textInputProps = useTextInput(initialText);

  const editText = textInputProps.value;
  const editDate = date;

  const hasUnsavedText = editText !== initialText;
  const hasUnsavedDate = date !== initialDate;
  const hasUnsavedChanges = hasUnsavedDate || hasUnsavedText;

  const onPressBack = usePressBack(hasUnsavedChanges);

  const pressParams = usePress({ editItem, isEdit, editText, editDate });

  return {
    hasUnsavedChanges,
    onPressBack,
    textInputProps,
    pressParams,
  };
};
