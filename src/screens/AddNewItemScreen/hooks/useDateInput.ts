import { useState } from 'react';
import { createCurrentDateHelper } from '../../../helpers/createCurrentDateHelper';
import { useDatePicker } from './useDatePicker';

export const useDateInput = (initialValue: Date) => {
  const [date, setDate] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const currentDate = createCurrentDateHelper(date);
  const hasUnsavedDate = date !== initialValue;
  const onPressOpen = (open = true) => {
    setOpen(open);
  };
  const datePicker = useDatePicker(date, setOpen, open, setDate);
  return {
    datePicker,
    hasUnsavedDate,
    setDate,
    date,
    open,
    setOpen,
    currentDate,
    onPressOpen,
  };
};
