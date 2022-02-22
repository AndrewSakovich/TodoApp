import React from 'react';
import {useSelector} from 'react-redux';
import {ReduxStoreType} from '../../redux/store';
import {ScrollView, Text, View} from 'react-native';
import {TodoReducerState} from '../../redux/reducers/TodoReducer';
import {SignOutButton} from '../../components/SignOutButton';

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
    <ScrollView>
      <View>
        <Text>{'User name'}</Text>
        <Text>{nameUser}</Text>
      </View>
      <View>
        <Text>{'User email'}</Text>
        <Text>{emailUser}</Text>
      </View>
      <View>
        <Text>{'User phone number'}</Text>
        <Text>{phoneNumber}</Text>
      </View>
      <SignOutButton />
    </ScrollView>
  );
};
