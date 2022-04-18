import { Dispatch, SetStateAction, useState } from 'react';

export type UseTextInputReturn = {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

export type UseTextInput = (initialValue: string) => UseTextInputReturn;

export const useTextInput: UseTextInput = initialValue => {
  const [value, setText] = useState(initialValue);
  return {
    value,
    onChangeText: setText,
  };
};
