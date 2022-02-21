import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';

export const TodoListEmptyComponent: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{'Add new tasks'}</Text>
    </View>
  );
};
