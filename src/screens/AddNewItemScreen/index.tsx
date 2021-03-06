import React, { FC, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { CustomInput } from '../../components/CustomInput';
import { style } from './style';
import 'react-native-gesture-handler';
import { AddNewItemScreeBackButton } from '../../components/AddNewItemScreenBackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  AddNewItemScreenNavigationProps,
  AddNewItemScreenRouteProps,
} from './type';
import { SkypeIndicator } from 'react-native-indicators';
import { COLORS } from '../../COLORS';
import { useAddNewItemScreen } from './hooks/useAddNewItemScreen';
import { createCurrentDateHelper } from '../../helpers/createCurrentDateHelper';
import { useDatePicker } from './hooks/useDatePicker';

export const AddNewItemScreen: FC = () => {
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const route = useRoute<AddNewItemScreenRouteProps>();

  const isEdit = route.params?.isEdit!;
  const editItem = route.params?.editItem!;
  const editItemDate = editItem?.notificationDate;

  const initialDate = isEdit ? new Date(editItemDate!) : new Date();

  const { hasUnsavedChanges, onPressBack, pressParams, inputProps, editDate } =
    useAddNewItemScreen({ editItem, isEdit, initialDate });

  const { onPress, isLoading } = pressParams;

  const currentDate = createCurrentDateHelper(editDate);

  useEffect(() => {
    const title = isEdit ? 'Edit' : 'Add new task';
    navigation.setOptions({ title });
  }, []);

  const { onChangeText, value, onChangeDate } = inputProps;
  const datePickerProps = useDatePicker(onChangeDate);

  const { onPressDateInput, onConfirm, onCancelDate, open } = datePickerProps;

  const buttonStyle = hasUnsavedChanges ? style.button : style.buttonDis;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <AddNewItemScreeBackButton onPress={onPressBack} />;
      },
    });
  }, [onPressBack, navigation]);

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
          value={value}
          onChangeText={onChangeText}
          placeholder={'New task'}
          title={title}
          disable={isLoading}
        />
        <CustomInput
          value={currentDate}
          onPress={onPressDateInput}
          title={dateInputTitle}
          disable={isLoading}
        />
      </View>
      <DatePicker
        minimumDate={new Date()}
        modal
        open={open}
        date={editDate}
        onConfirm={onConfirm}
        onCancel={onCancelDate}
      />
      <TouchableOpacity
        disabled={isLoading || !hasUnsavedChanges}
        style={buttonStyle}
        onPress={onPress}>
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
