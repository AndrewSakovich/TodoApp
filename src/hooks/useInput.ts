import { Dispatch, SetStateAction, useState } from 'react';

export type UseInputReturn = {
  date: Date;
  onChangeDate: Dispatch<SetStateAction<Date>>;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

export type UseTextInput = (
  initialTextValue: string,
  initialDateValue: Date,
) => UseInputReturn;

export const useInput: UseTextInput = (initialTextValue, initialDateValue) => {
  const [date, setDate] = useState(initialDateValue);
  const [value, setText] = useState(initialTextValue);
  return {
    date,
    onChangeDate: setDate,
    value,
    onChangeText: setText,
  };
};
