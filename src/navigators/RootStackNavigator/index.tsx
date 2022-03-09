import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainBottomTabNavigator } from '../MainBottomTabNavigator';
import { AddNewItemScreen } from '../../screens/AddNewItemScreen';
import { COLORS } from '../../COLORS';
import { RootStackNavigationParamList } from './type';
import { NAMESCREEN } from '../nameScreen';
import { useSelector } from 'react-redux';
import { ReduxStoreType } from '../../redux/store';
import { LoginScreen } from '../../screens/LoginScreen';

export const RootStackNavigator: FC = () => {
  const Stack = createNativeStackNavigator<RootStackNavigationParamList>();

  const isSignIn = useSelector<ReduxStoreType>(state => {
    return state.auth.userToken;
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignIn ? (
          <React.Fragment>
            <Stack.Screen
              name={NAMESCREEN.MAIN_BOTTOM_TAB_NAVIGATOR}
              component={MainBottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={NAMESCREEN.ADD_NEW_ITEM_SCREEN}
              component={AddNewItemScreen}
              options={{
                title: 'Add new task',
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                  color: COLORS.white,
                },
                headerStyle: {
                  backgroundColor: COLORS.sapphire,
                },
              }}
            />
          </React.Fragment>
        ) : (
          <Stack.Screen
            name={NAMESCREEN.LOGIN_SCREEN}
            component={LoginScreen}
            options={{
              title: 'Login',
              headerTintColor: COLORS.white,
              headerTitleStyle: {
                color: COLORS.white,
              },
              headerStyle: {
                backgroundColor: COLORS.sapphire,
              },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
