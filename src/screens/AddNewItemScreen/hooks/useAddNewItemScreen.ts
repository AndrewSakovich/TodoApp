import { useInput, UseInputReturn } from '../../../hooks/useInput';
import { usePress, UsePressReturn } from './usePress';
import { TodoItemType } from '../../../models';
import { usePressBack } from './usePressBack';

export type UseAddNewItemScreenParams = {
  editItem: TodoItemType;
  isEdit: boolean;
  initialDate: Date;
};

type UseAddNewItemScreenReturn = {
  hasUnsavedChanges: boolean;
  onPressBack: () => void;
  inputProps: UseInputReturn;
  pressParams: UsePressReturn;
};

export type UseAddNewItemScreen = (
  params: UseAddNewItemScreenParams,
) => UseAddNewItemScreenReturn;

export const useAddNewItemScreen = (params: UseAddNewItemScreenParams) => {
  const { editItem, isEdit, initialDate } = params;
  const initialText = editItem?.text ?? '';

  const inputProps = useInput(initialText, initialDate);

  const editText = inputProps.value;
  const editDate = inputProps.date;

  const hasUnsavedText = editText !== initialText;
  const hasUnsavedDate = editDate !== initialDate;
  const hasUnsavedChanges = hasUnsavedDate || hasUnsavedText;

  const onPressBack = usePressBack(hasUnsavedChanges);

  const pressParams = usePress({ editItem, isEdit, editText, editDate });

  return {
    hasUnsavedChanges,
    onPressBack,
    inputProps,
    pressParams,
    editDate,
  };
};
