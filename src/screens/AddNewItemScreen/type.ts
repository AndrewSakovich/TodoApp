import { RootStackNavigationParamList } from '../../navigators/RootStackNavigator/type';
import { StackScreenProps } from '@react-navigation/stack';
import { NAMESCREEN } from '../../navigators/NAMESCREEN';

export type AddNewItemScreenNavigationProps = StackScreenProps<
  RootStackNavigationParamList,
  NAMESCREEN.ADD_NEW_ITEM_SCREEN
>;
