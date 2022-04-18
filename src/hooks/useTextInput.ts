import { useState } from 'react';

export const useTextInput = (initialValue: string) => {
  const [value, setText] = useState(initialValue);
  return {
    value,
    onChangeText: setText,
  };
};
