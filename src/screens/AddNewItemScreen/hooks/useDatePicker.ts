export const useDatePicker = (date, setOpen, open, setDate) => {
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
