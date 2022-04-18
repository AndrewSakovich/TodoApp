import { stopNotificationHelper } from '../../../helpers/stopNotificationHelper';
import { createNewItemHelper } from '../../../helpers/createNewItemHelper';
import { createNotificationHelper } from '../../../helpers/createNotificationHelper';
import { editItemSagaAction } from '../../../redux/actions/todoSagaActions/editItemSagaAction';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItemType } from '../../../models';
import { deviceTokenSelector } from '../../../redux/selectors/deviceTokenSelector';
import { useState } from 'react';
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
  editText: TodoItemType['text'];
  editDate: Date;
};
export const usePress = (params: UsePressParams) => {
  const { isEdit, editText, editItem, editDate } = params;

  const [isLoading, setLoading] = useState<boolean>();
  const dispatch = useDispatch();
  const channelId = useSelector(deviceTokenSelector);
  const navigation = useNavigation<AddNewItemScreenNavigationProps>();
  const userToken = useSelector(userTokenSelector);

  const callback: AddItemSagaActionPayload['callback'] = isSuccess => {
    if (isSuccess) {
      return navigation.goBack();
    }
    return setLoading(false);
  };

  const onPressEdit = () => {
    const { notificationId, id } = editItem!;
    stopNotificationHelper(notificationId);
    const newItem = createNewItemHelper(editText, editDate, id);
    createNotificationHelper({ newItem, date: editDate, channelId });
    setLoading(true);

    dispatch(editItemSagaAction({ newItem, callback }));
  };

  const onPressAdd = () => {
    const newItem = createNewItemHelper(editText, editDate);
    createNotificationHelper({ channelId, newItem, date: editDate });
    setLoading(true);
    dispatch(addItemSagaAction({ newItem, userToken, callback }));
  };

  const onPress = isEdit ? onPressEdit : onPressAdd;

  return {
    onPress,
    isLoading,
  };
};
