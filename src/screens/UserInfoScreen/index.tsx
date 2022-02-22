import React from 'react';
import {useSelector} from 'react-redux';
import {ReduxStoreType} from '../../redux/store';
import {ScrollView, Text, View} from 'react-native';
import {TodoReducerState} from '../../redux/reducers/TodoReducer';
import {SignOutButton} from '../../components/SignOutButton';
import {style} from './style';

export const UserInfoScreen = () => {
  const userInfo = useSelector<ReduxStoreType, TodoReducerState['user']>(
    state => {
      return state.user;
    },
  );

  const phoneNumber = userInfo
    ? userInfo.phoneNumber
      ? userInfo.phoneNumber
      : 'phone number not provided'
    : '';
  const nameUser = userInfo ? userInfo.displayName : '';
  const emailUser = userInfo ? userInfo.email : '';

  return (
    <View style={style.container}>
      <View style={style.info}>
        <View style={style.itemInfo}>
          <Text style={style.font}>{'User name:'}</Text>
          <Text style={style.font}>{nameUser}</Text>
        </View>
        <View style={style.itemInfo}>
          <Text style={style.font}>{'User email:'}</Text>
          <Text style={style.font}>{emailUser}</Text>
        </View>
        <View style={style.itemInfo}>
          <Text style={style.font}>{'User phone number:'}</Text>
          <Text style={style.font}>{phoneNumber}</Text>
        </View>
      </View>
      <SignOutButton />
    </View>
  );
};
