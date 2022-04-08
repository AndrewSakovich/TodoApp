import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../COLORS';
import React, { FC } from 'react';
import { AddNewItemScreenBackButtonPropsType } from './type';

export const AddNewItemScreeBackButton: FC<
  AddNewItemScreenBackButtonPropsType
> = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} size={22} color={COLORS.white} />
    </TouchableOpacity>
  );
};
