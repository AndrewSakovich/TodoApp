import React from 'react';
import {TodoListTopNavigator} from '../TodoListTopNavigator';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {LoginScreen} from '../../screens/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../COLORS';
import {TodoListTopNavigatorHeader} from '../../components/TodoListTopNavigatorHeader';
import {MainBottomTabParamList} from './type';
import {nameScreen} from '../nameScreen';

export const MainBottomTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator<MainBottomTabParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.sapphire,
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: COLORS.jacksonsPurple,
        tabBarInactiveBackgroundColor: COLORS.sapphire,
      }}>
      <Tab.Screen
        name={nameScreen.TODO_LIST_TOP_NAVIGATOR}
        component={TodoListTopNavigator}
        options={{
          title: 'Todo',
          headerRight: () => {
            return <TodoListTopNavigatorHeader />;
          },
          tabBarIcon: () => {
            return (
              <FontAwesomeIcon icon={faList} size={20} color={COLORS.white} />
            );
          },
        }}
      />
      <Tab.Screen
        name={nameScreen.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: () => {
            return (
              <FontAwesomeIcon
                icon={faUserCheck}
                size={20}
                color={COLORS.white}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
