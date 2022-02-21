import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ItemListScreen} from '../../screens/ItemListScreen';
import {TodoListTopNavigationParamList} from './type';
import {nameScreen} from '../nameScreen';

export const TodoListTopNavigator: React.FC = () => {
  const Tab = createMaterialTopTabNavigator<TodoListTopNavigationParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{title: 'Todo'}}
        name={nameScreen.ITEMS_SCREEN}
        component={ItemListScreen}
        initialParams={{done: false}}
      />
      <Tab.Screen
        options={{title: 'Done'}}
        name={nameScreen.DONE_ITEMS_SCREEN}
        component={ItemListScreen}
        initialParams={{done: true}}
      />
    </Tab.Navigator>
  );
};
