import React, { FC, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../COLORS';
import { createNewItemHelper } from '../../helpers/createNewItemHelper';
import { TodoItemType } from '../../models';
import { useNavigation } from '@react-navigation/native';
import { AddNewItemScreenNavigationProps } from './type';
import { userTokenSelector } from '../../redux/selectors/userTokenSelector';
import { TodoSagaActions } from '../../redux/actions/todoSagaActions';

export const AddNewItemScreen: FC = () => {
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const dispatch = useDispatch();

  const userToken = useSelector(userTokenSelector);

  const [text, setText] = useState<string>('');
  const buttonStyle = text ? style.button : style.buttonDis;

  const addItem = async (text: TodoItemType['text']) => {
    const newItem = createNewItemHelper(text);
    dispatch({ type: TodoSagaActions.ADD_ITEM_SAGA, newItem, userToken });
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
