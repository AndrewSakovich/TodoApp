import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {addItemAction} from '../../redux/actions/todoActions/addItemAction';
import {COLORS} from '../../COLORS';
import {createNewItemHelper} from '../../helpers/createNewItemHelper';
import {TodoItemType} from '../../models';
import {AddNewItemScreenNavigationProps} from './type';

export const AddNewItemScreen: React.FC<
  AddNewItemScreenNavigationProps
> = props => {
  const {navigation} = props;

  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');
  const buttonStyle: ViewStyle = text ? style.button : style.buttonDis;

  const addItem = (text: TodoItemType['text']) => {
    const newItem = createNewItemHelper(text);

    dispatch(addItemAction({newItem}));
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
        keyboardType="default"
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
