import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { FC } from 'react';
import { style } from './style';
import { useSelector } from 'react-redux';
import { TodoItemPropsType } from './types';
import { firebase } from '@react-native-firebase/database';
import { ReduxStoreType } from '../../redux/store';
import { SignInPayload } from '../../redux/actions/todoActions/signInAction';
import { userTokenSelector } from '../../redux/selectors/userTokenSelector';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const {
    todoItem: { id, text, isDone },
  } = props;

  const userToken = useSelector<ReduxStoreType, SignInPayload['userToken']>(
    userTokenSelector,
  );

  // const dispatch = useDispatch();

  const textStyle = isDone ? style.doneText : style.text;

  const onPressDone = async () => {
    await firebase
      .app()
      .database(
        'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(`Users/${userToken}/Todo/${id}`)
      .update({ isDone: !isDone });
    // dispatch(doneItemAction({ id }));
  };

  const onPressDelete = () => {
    Alert.alert('Delete task', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          await createReferenceHelper
            .ref(`Users/${userToken}/Todo/${id}`)
            .remove();
          // dispatch(deleteItemAction({ id, isDone }));
        },
      },
    ]);
  };

  return (
    <View style={style.item}>
      <TouchableOpacity style={style.touch} onPress={onPressDone}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
      <Text style={style.delete} onPress={onPressDelete}>
        {'DELETE'}
      </Text>
    </View>
  );
};
