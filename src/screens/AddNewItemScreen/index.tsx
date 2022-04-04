import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createNewItemHelper } from '../../helpers/createNewItemHelper';
import { TodoItemType } from '../../models';
import { useNavigation } from '@react-navigation/native';
import { AddNewItemScreenNavigationProps } from './type';
import { userTokenSelector } from '../../redux/selectors/userTokenSelector';
import { addItemSagaAction } from '../../redux/actions/todoSagaActions/addItemSagaAction';
import { deviceTokenSelector } from '../../redux/selectors/deviceTokenSelector';
import { createNotificationHelper } from '../../helpers/createNotificationHelper';
import DatePicker from 'react-native-date-picker';
import { CustomInput } from '../../components/CustomInput';
import { style } from './style';

export const AddNewItemScreen: FC = () => {
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const dispatch = useDispatch();

  const userToken = useSelector(userTokenSelector);
  const channelId = useSelector(deviceTokenSelector);

  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const currentDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  const buttonStyle = text ? style.button : style.buttonDis;

  const addItem = (text: TodoItemType['text']) => {
    const newItem = createNewItemHelper(text);
    createNotificationHelper({ channelId, newItem, date });
    dispatch(addItemSagaAction({ newItem, userToken }));
  };

  const onPress = () => {
    addItem(text);
    navigation.goBack();
  };

  const onConfirmDate = (date: Date) => {
    onCancelDate();
    setDate(date);
  };

  const onCancelDate = () => {
    setOpen(false);
  };

  const openDate = () => {
    setOpen(true);
  };

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <CustomInput
          onChangeText={setText}
          placeholder={'New task'}
          value={text}
          title={'Add new tack'}
        />
        <CustomInput
          value={currentDate}
          title={'Set the reminder send time'}
          onPress={openDate}
        />
      </View>
      <DatePicker
        minimumDate={new Date()}
        modal
        open={open}
        date={date}
        onConfirm={onConfirmDate}
        onCancel={onCancelDate}
      />
      <TouchableOpacity disabled={!text} style={buttonStyle} onPress={onPress}>
        <Text style={style.text}>{'Add new task'}</Text>
      </TouchableOpacity>
    </View>
  );
};
