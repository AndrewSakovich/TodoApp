import { useTextInput } from '../../../hooks/useTextInput';
import { usePress } from './usePress';
import { TodoItemType } from '../../../models';

export type UseAddNewItemScreenParams = {
  editItem: TodoItemType;
  isEdit: boolean;
  date: Date;
  initialDate: Date;
};

export const useAddNewItemScreen = (params: UseAddNewItemScreenParams) => {
  const { editItem, isEdit, date, initialDate } = params;
  const initialText = editItem?.text ?? '';

  const textInputProps = useTextInput(initialText);

  const editText = textInputProps.value;
  const editDate = date;

  const hasUnsavedText = editText !== initialText;
  const hasUnsavedDate = date !== initialDate;

  const pressParams = usePress({ editItem, isEdit, editText, editDate });

  return {
    textInputProps,
    pressParams,
    hasUnsavedDate,
    hasUnsavedText,
  };
};
