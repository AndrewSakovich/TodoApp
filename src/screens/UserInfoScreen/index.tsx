import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from '../../redux/store';
import { Image, Text, View } from 'react-native';
import { TodoReducerState } from '../../redux/reducers/TodoReducer';
import { SignOutButton } from '../../components/SignOutButton';
import { style } from './style';
import { TodoItemType } from '../../models';
import { AuthSagaActions } from '../../redux/actions/authSagaActions';

export const UserInfoScreen: FC = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector<ReduxStoreType, TodoReducerState['user']>(
    state => {
      return state.user;
    },
  );

  const googleSignOut = () => {
    dispatch({ type: AuthSagaActions.SIGN_OUT_SAGA });
  };

  const todoItems = useSelector<ReduxStoreType, TodoItemType[]>(state => {
    return state.todoItems;
  });

  const numberTask = todoItems.length;
  const numberDoneTask = todoItems.filter(item => {
    return item.isDone;
  }).length;

  const phoneNumber = userInfo?.phoneNumber ?? 'Phone number not provided';
  const nameUser = userInfo?.displayName;
  const emailUser = userInfo?.email;
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
