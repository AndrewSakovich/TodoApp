import { useState } from 'react';

export const useTextInput = (initialValue: string) => {
  const [value, setText] = useState(initialValue);
  const hasUnsavedText = value !== initialValue;
  return {
    hasUnsavedText,
    value,
    onChangeText: setText,
  };
};
