import React, { FC, useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createNewItemHelper } from '../../helpers/createNewItemHelper';
import { userTokenSelector } from '../../redux/selectors/userTokenSelector';
import {
  addItemSagaAction,
  AddItemSagaActionPayload,
} from '../../redux/actions/todoSagaActions/addItemSagaAction';
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
import { SkypeIndicator } from 'react-native-indicators';
import { COLORS } from '../../COLORS';

export const AddNewItemScreen: FC = () => {
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const route = useRoute<AddNewItemScreenRouteProps>();
  const dispatch = useDispatch();

  const isEdit = route.params?.isEdit;
  const editItem = route.params?.editItem;

  const initialState = editItem?.text ?? '';
  const editDate = editItem?.notificationDate;
  const initialDate = isEdit ? new Date(editDate!) : new Date();

  useEffect(() => {
    const title = isEdit ? 'Edit' : 'Add new task';
    navigation.setOptions({ title });
  }, []);

  const userToken = useSelector(userTokenSelector);
  const channelId = useSelector(deviceTokenSelector);

  const [text, setText] = useState(initialState);
  const [date, setDate] = useState(initialDate);
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const hasUnsavedText = isEdit ? editItem?.text !== text : !!text;
  const hasUnsavedDate = initialDate !== date;
  const hasUnsavedChanges = hasUnsavedDate || hasUnsavedText;

  const back = () => {
    navigation.goBack();
  };

  const callback: AddItemSagaActionPayload['callback'] = isSuccess => {
    if (isSuccess) {
      return navigation.goBack();
    }
    return setLoading(false);
  };

  const currentDate = createCurrentDateHelper(date);
  const buttonStyle = hasUnsavedChanges ? style.button : style.buttonDis;

  const onPressBack = useCallback(() => {
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
    const newItem = createNewItemHelper(text, date);
    createNotificationHelper({ channelId, newItem, date });
    dispatch(addItemSagaAction({ newItem, userToken, callback }));
  };

  const onPressEdit = () => {
    const { notificationId, id } = editItem!;
    stopNotificationHelper(notificationId);
    const newItem = createNewItemHelper(text, date);
    createNotificationHelper({ newItem, date, channelId });
    setLoading(true);
    dispatch(
      editItemSagaAction({
        id,
        text,
        date: date.toString(),
        callback,
      }),
    );
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
      {isLoading && (
        <SkypeIndicator
          style={style.loader}
          size={50}
          color={COLORS.sapphire}
        />
      )}
      <View style={style.inputContainer}>
        <CustomInput
          onChangeText={setText}
          placeholder={'New task'}
          value={text}
          title={title}
          disable={isLoading}
        />
        <CustomInput
          value={currentDate}
          title={dateInputTitle}
          onPress={openDate}
          disable={isLoading}
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
      <TouchableOpacity
        disabled={!hasUnsavedChanges && !isLoading}
        style={buttonStyle}
        onPress={onPress}>
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
