import { stopNotificationHelper } from '../../../helpers/stopNotificationHelper';
import { createNewItemHelper } from '../../../helpers/createNewItemHelper';
import { createNotificationHelper } from '../../../helpers/createNotificationHelper';
import { editItemSagaAction } from '../../../redux/actions/todoSagaActions/editItemSagaAction';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItemType } from '../../../models';
import { useTextInput } from '../../../hooks/useTextInput';
import { useDateInput } from './useDateInput';
import { deviceTokenSelector } from '../../../redux/selectors/deviceTokenSelector';
import { Dispatch, SetStateAction } from 'react';
import {
  addItemSagaAction,
  AddItemSagaActionPayload,
} from '../../../redux/actions/todoSagaActions/addItemSagaAction';
import { useNavigation } from '@react-navigation/native';
import { AddNewItemScreenNavigationProps } from '../type';
import { userTokenSelector } from '../../../redux/selectors/userTokenSelector';

export type UsePressParams = {
  isEdit: boolean;
  editItem: TodoItemType;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const usePress = (usePressParams: UsePressParams) => {
  const { isEdit, editItem, setLoading } = usePressParams;

  const editDate = editItem?.notificationDate;
  const initialState = editItem?.text ?? '';
  const initialDate = isEdit ? new Date(editDate!) : new Date();

  const dispatch = useDispatch();
  const userToken = useSelector(userTokenSelector);
  const dateInput = useDateInput(initialDate);
  const textInput = useTextInput(initialState);
  const channelId = useSelector(deviceTokenSelector);
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const back = () => {
    return navigation.goBack();
  };

  const text = textInput.value;
  const date = dateInput.date;

  const callback: AddItemSagaActionPayload['callback'] = isSuccess => {
    if (isSuccess) {
      return back();
    }
    return setLoading(false);
  };

  const onPressEdit = () => {
    const { notificationId, id } = editItem!;
    stopNotificationHelper(notificationId);
    const newItem = createNewItemHelper(text, date, id);
    createNotificationHelper({ newItem, date, channelId });
    setLoading(true);

    dispatch(editItemSagaAction({ newItem, callback }));
  };

  const onPressAdd = () => {
    const newItem = createNewItemHelper(text, date);
    createNotificationHelper({ channelId, newItem, date });
    setLoading(true);
    dispatch(addItemSagaAction({ newItem, userToken, callback }));
  };

  const onPress = () => {
    if (isEdit) {
      return onPressEdit();
    }
    return onPressAdd();
  };

  return {
    onPress,
    dateInput,
    textInput,
  };
};
