import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { MainBottomTabParamList } from '../MainBottomTabNavigator/type';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigationParamList } from '../RootStackNavigator/type';
import { NAMESCREEN } from '../nameScreen';

export type TodoListTopNavigationParamList = {
  [NAMESCREEN.ITEMS_SCREEN]: { isDone: boolean };
  [NAMESCREEN.DONE_ITEMS_SCREEN]: { isDone: boolean };
};

export type TodoListTopNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<
    MainBottomTabParamList,
    NAMESCREEN.TODO_LIST_TOP_NAVIGATOR
  >,
  StackNavigationProp<RootStackNavigationParamList>
>;

export type TodoListTopNavigationRouteProp =
  RouteProp<TodoListTopNavigationParamList>;
