import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType, RootStateType } from '../../redux/store';
import { Image, Text, View } from 'react-native';
import { TodoReducerState } from '../../redux/reducers/todoReducer';
import { SignOutButton } from '../../components/SignOutButton';
import { style } from './style';
import { TodoItemType } from '../../models';
import { signOutSagaAction } from '../../redux/actions/authSagaActions/signOutSagaAction';
import { userSelector } from '../../redux/selectors/userSelector';
import { todoItemsSelector } from '../../redux/selectors/todoItemsSelector';
import { AuthReducerState } from '../../redux/reducers/authReducer';

export const UserInfoScreen: FC = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector<RootStateType, AuthReducerState['user']>(
    userSelector,
  );

  const googleSignOut = () => {
    dispatch(signOutSagaAction());
  };

  const todoItems = useSelector<RootStateType, TodoItemType[]>(
    todoItemsSelector,
  );

  const numberTask = todoItems.length;
  const numberDoneTask = todoItems.filter(item => {
    return item.isDone;
  }).length;

  const phoneNumber = userInfo?.phoneNumber ?? 'Phone number not provided';
  const nameUser = userInfo?.displayName;
  const emailUser = userInfo?.email;
  //use ?? because source can not be  null
  const photoUrl = userInfo?.photoURL ?? undefined;

  return (
    <View style={style.container}>
      <View>
        <View style={style.headerContainer}>
          <Image source={{ uri: photoUrl }} style={style.img} />
          <Text style={style.nameFont}>{nameUser}</Text>
          <Text
            style={
              style.font
            }>{`completed ${numberDoneTask} out of ${numberTask}`}</Text>
        </View>
        <View>
          <View style={style.itemInfo}>
            <Text style={style.fontBold}>{'Email:'}</Text>
            <Text style={style.font}>{emailUser}</Text>
          </View>
          <View style={style.itemInfo}>
            <Text style={style.fontBold}>{'Phone number:'}</Text>
            <Text style={style.font}>{phoneNumber}</Text>
          </View>
        </View>
      </View>
      <SignOutButton googleSignOut={googleSignOut} />
    </View>
  );
};
