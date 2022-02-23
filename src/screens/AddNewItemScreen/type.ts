import { RootStackNavigationParamList } from '../../navigators/RootStackNavigator/type';
import { StackNavigationProp } from '@react-navigation/stack';
import { NAMESCREEN } from '../../navigators/NAMESCREEN';

export type AddNewItemScreenNavigationProps = StackNavigationProp<
  RootStackNavigationParamList,
  NAMESCREEN.ADD_NEW_ITEM_SCREEN
>;
