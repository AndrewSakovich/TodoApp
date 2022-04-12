import React, { FC, useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createNewItemHelper } from '../../helpers/createNewItemHelper';
import { TodoItemType } from '../../models';
import { userTokenSelector } from '../../redux/selectors/userTokenSelector';
import { addItemSagaAction } from '../../redux/actions/todoSagaActions/addItemSagaAction';
import { deviceTokenSelector } from '../../redux/selectors/deviceTokenSelector';
import { createNotificationHelper } from '../../helpers/createNotificationHelper';
import DatePicker from 'react-native-date-picker';
import { CustomInput } from '../../components/CustomInput';
import { style } from './style';
import 'react-native-gesture-handler';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import { AddNewItemScreeBackButton } from '../../components/AddNewItemScreenBackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  AddNewItemScreenNavigationProps,
  AddNewItemScreenRouteProps,
} from './type';
import { editItemSagaAction } from '../../redux/actions/todoSagaActions/editItemSagaAction';
import { createCurrentDateHelper } from '../../helpers/createCurrentDateHelper';
import { stopNotificationHelper } from '../../helpers/stopNotificationHelper';

export const AddNewItemScreen: FC = () => {
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const route = useRoute<AddNewItemScreenRouteProps>();
  const dispatch = useDispatch();

  const isEdit = route.params.isEdit;
  const editItem = route.params.editItem;
  const initialState = editItem?.text ?? '';

  useEffect(() => {
    setDate(editItem?.notificationDate ?? new Date());
    const title = isEdit ? 'Edit' : 'Add new task';
    navigation.setOptions({ title: title });
  }, []);

  const userToken = useSelector(userTokenSelector);
  const channelId = useSelector(deviceTokenSelector);

  const [text, setText] = useState(initialState);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const callback = () => {
    navigation.goBack();
  };

  const hasUnsavedChanges = !!text;

  const currentDate = createCurrentDateHelper(date);
  const buttonStyle = text ? style.button : style.buttonDis;

  const addItem = (text: TodoItemType['text']) => {
    const newItem = createNewItemHelper(text, date);
    createNotificationHelper({ channelId, newItem, date });
    dispatch(addItemSagaAction({ newItem, userToken, callback }));
  };

  const onPressBack = useCallback(() => {
    const back = () => {
      navigation.setParams({
        isEdit: false,
      });
      return navigation.goBack();
    };

    if (hasUnsavedChanges) {
      return createAlertMessageHelper({
        onPress: back,
        title: 'Discard changes?',
        message:
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
        confirmButtonTitle: 'Discard',
        cancelButtonTitle: "Don't leave",
      });
    }

    return back();
  }, [hasUnsavedChanges]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <AddNewItemScreeBackButton onPress={onPressBack} />;
      },
    });
  }, [onPressBack, navigation]);

  const onPressAdd = () => {
    addItem(text);
  };

  const onPressEdit = () => {
    console.log('hello');
    stopNotificationHelper(editItem.notificationId);
    const newItem = createNewItemHelper(text, date);
    createNotificationHelper({ newItem, date, channelId });
    dispatch(editItemSagaAction({ id: editItem.id, text, callback }));
  };

  const onPress = () => {
    if (isEdit) {
      return onPressEdit();
    }

    return onPressAdd();
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

  const dateInputTitle = isEdit
    ? 'Edit the reminder send time'
    : 'Set the reminder send time';
  const title = isEdit ? 'Edit tack' : 'Add new tack';

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <CustomInput
          onChangeText={setText}
          placeholder={'New task'}
          value={text}
          title={title}
        />
        <CustomInput
          value={currentDate}
          title={dateInputTitle}
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
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
