import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from '../../redux/store';
import { Image, Text, View } from 'react-native';
import { TodoReducerState } from '../../redux/reducers/TodoReducer';
import { SignOutButton } from '../../components/SignOutButton';
import { style } from './style';
import { TodoItemType } from '../../models';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { SignInPayload } from '../../redux/actions/authActions/signInAction';
import { signOutAction } from '../../redux/actions/authActions/signOutAction';
import { AuthSagaActions } from '../../redux/actions/authSagaActions';

export const UserInfoScreen: FC = () => {
  const [data, setData] = useState<TodoItemType[]>([]);
  const dispatch = useDispatch();

  const path = (userToken: SignInPayload['userToken']) => {
    return `Users/${userToken}/Todo`;
  };

  const userInfo = useSelector<ReduxStoreType, TodoReducerState['user']>(
    state => {
      return state.user;
    },
  );
  const userToken = userInfo?.uid ?? null;

  useEffect(() => {
    const data = createReferenceHelper
      .ref(path(userToken))
      .on('value', snapshot => {
        const obj = snapshot.val() ?? {};
        const arrData: TodoItemType[] = Object.values(obj);
        setData(arrData);
      });

    // Stop listening for updates when no longer required
    return () =>
      createReferenceHelper.ref(path(userToken)).off('child_added', data);
  }, []);

  const googleSignOut = async () => {
    dispatch({ type: AuthSagaActions.SIGN_OUT_SAGA });
  };

  // const todoItems = useSelector<ReduxStoreType, TodoItemType[]>(state => {
  //   return state.todoItems;
  // });

  const numberTask = data.length;
  const numberDoneTask = data.filter(item => {
    return item.isDone;
  }).length;

  const phoneNumber = userInfo?.phoneNumber ?? 'Phone number not provided';
  const nameUser = userInfo?.displayName ?? undefined;
  const emailUser = userInfo?.email ?? undefined;
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
