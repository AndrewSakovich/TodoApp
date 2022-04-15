import { Dispatch, SetStateAction } from 'react';

export type useDatePickerParams = {
  date: Date;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setDate: Dispatch<SetStateAction<Date>>;
};

export const useDatePicker = (params: useDatePickerParams) => {
  const { date, setDate, setOpen, open } = params;

  const onConfirm = (date: Date) => {
    setDate(date);
    onCancelDate();
  };

  const onCancelDate = () => {
    setOpen(false);
  };
  return {
    open,
    date,
    onConfirm,
    onCancel: onCancelDate,
  };
};
