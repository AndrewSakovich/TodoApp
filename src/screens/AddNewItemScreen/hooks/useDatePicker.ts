import { useState } from 'react';
import { UseInputReturn } from '../../../hooks/useInput';

export type UseDatePickerReturn = {
  onPressDateInput: () => void;
  onConfirm: (date: Date) => void;
  onCancelDate: () => void;
  open: boolean;
};

export type UseDatePicker = (
  onChangeDate: UseInputReturn['onChangeDate'],
) => UseDatePickerReturn;

export const useDatePicker: UseDatePicker = onChangeDate => {
  const [open, setOpen] = useState(false);

  const onPressDateInput = () => {
    setOpen(true);
  };

  const onConfirm = (date: Date) => {
    onChangeDate(date);
    onCancelDate();
  };

  const onCancelDate = () => {
    setOpen(false);
  };
  return {
    onPressDateInput,
    onConfirm,
    onCancelDate,
    open,
  };
};
