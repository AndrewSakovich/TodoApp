import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainBottomTabNavigator} from '../MainBottomTabNavigator';
import {AddNewItemScreen} from '../../screens/AddNewItemScreen';
import {COLORS} from '../../COLORS';
import {RootStackNavigationParamList} from './type';
import {nameScreen} from '../nameScreen';

export const RootStackNavigator: React.FC = () => {
  const Stack = createStackNavigator<RootStackNavigationParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={nameScreen.MAIN_BOTTOM_TAB_NAVIGATOR}
          component={MainBottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={nameScreen.ADD_NEW_ITEM_SCREEN}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
