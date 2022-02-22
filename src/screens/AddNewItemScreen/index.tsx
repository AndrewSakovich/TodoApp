import React, { useState, FC } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from './style';
import { useDispatch } from 'react-redux';
import { AddItemAction } from '../../redux/actions/todoActions/addItemAction';
import { COLORS } from '../../COLORS';
import { createNewItemHelper } from '../../helpers/createNewItemHelper';
import { TodoItemType } from '../../models';
import { useNavigation } from '@react-navigation/native';
import { TodoListTopNavigationProp } from '../../navigators/TodoListTopNavigator/type';

export const AddNewItemScreen: FC = () => {
  const navigation = useNavigation<TodoListTopNavigationProp>();
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');
  const buttonStyle = text ? style.button : style.buttonDis;

  const addItem = (text: TodoItemType['text']) => {
    const newItem = createNewItemHelper(text);

    dispatch(AddItemAction({ newItem }));
  };

  const onPress = () => {
    addItem(text);
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="New task"
        onChangeText={setText}
        value={text}
        selectionColor={COLORS.black}
      />
      <TouchableOpacity disabled={!text} style={buttonStyle} onPress={onPress}>
        <Text style={style.text}>{'Add new task'}</Text>
      </TouchableOpacity>
    </View>
  );
};
