import {CompositeNavigationProp} from '@react-navigation/native';
import {MainBottomTabParamList} from '../MainBottomTabNavigator/type';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationParamList} from '../RootStackNavigator/type';
import {nameScreen} from '../nameScreen';

export type TodoListTopNavigationParamList = {
  [nameScreen.ITEMS_SCREEN]: {done: boolean};
  [nameScreen.DONE_ITEMS_SCREEN]: {done: boolean};
};

export type TodoListTopNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<
    MainBottomTabParamList,
    nameScreen.TODO_LIST_TOP_NAVIGATOR
  >,
  StackNavigationProp<RootStackNavigationParamList>
>;
