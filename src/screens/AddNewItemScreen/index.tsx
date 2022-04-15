import React, { FC, useEffect, useState } from 'react';
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
import { usePressBack } from './hooks/usePressBack';
import { usePress } from './hooks/usePress';

export const AddNewItemScreen: FC = () => {
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const route = useRoute<AddNewItemScreenRouteProps>();

  const isEdit = route.params?.isEdit!;
  const editItem = route.params?.editItem!;

  const [isLoading, setLoading] = useState(false);

  const params = usePress({ editItem, isEdit, setLoading });
  const { onPress, textInput, dateInput } = params;

  useEffect(() => {
    const title = isEdit ? 'Edit' : 'Add new task';
    navigation.setOptions({ title });
  }, []);

  const hasUnsavedText = textInput.hasUnsavedText;
  const { datePicker, currentDate, onPressOpen, hasUnsavedDate } = dateInput;

  const hasUnsavedChanges = hasUnsavedDate || hasUnsavedText;

  const buttonStyle = hasUnsavedChanges ? style.button : style.buttonDis;

  const onPressBack = usePressBack(hasUnsavedChanges);

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
          {...textInput}
          placeholder={'New task'}
          title={title}
          disable={isLoading}
        />
        <CustomInput
          value={currentDate}
          onPress={() => {
            onPressOpen(true);
          }}
          title={dateInputTitle}
          disable={isLoading}
        />
      </View>
      <DatePicker minimumDate={new Date()} modal {...datePicker} />
      <TouchableOpacity
        disabled={isLoading || !hasUnsavedChanges}
        style={buttonStyle}
        onPress={onPress}>
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
