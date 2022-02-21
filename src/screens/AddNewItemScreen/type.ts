import {RootStackNavigationParamList} from '../../navigators/RootStackNavigator/type';
import {StackScreenProps} from '@react-navigation/stack';
import {nameScreen} from '../../navigators/nameScreen';

export type AddNewItemScreenNavigationProps = StackScreenProps<
  RootStackNavigationParamList,
  nameScreen.ADD_NEW_ITEM_SCREEN
>;
