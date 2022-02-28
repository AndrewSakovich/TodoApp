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
import { signOutAction } from '../../redux/actions/todoActions/signOutAction';
import { firebase } from '@react-native-firebase/database';

export const UserInfoScreen: FC = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const path = userToken => {
    return `Users/${userToken}/Todo`;
  };

  const userInfo = useSelector<ReduxStoreType, TodoReducerState['user']>(
    state => {
      return state.user;
    },
  );
  const userToken = userInfo.uid;

  useEffect(() => {
    const data = firebase
      .app()
      .database(
        'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(path(userToken))
      .on('value', snapshot => {
        const obj = snapshot.val() ? snapshot.val() : {};
        const arrData = Object.values(obj);
        setData(arrData);
      });

    // Stop listening for updates when no longer required
    return () =>
      firebase
        .app()
        .database(
          'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
        )
        .ref(path(userToken))
        .off('child_added', data);
  }, []);

  const googleSignOut = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.revokeAccess();
      dispatch(signOutAction());
    } catch (error) {
      console.error(error);
    }
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
