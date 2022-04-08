import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../COLORS';
import React, { FC } from 'react';
import { AddNewItemScreenBackButtonPropsType } from './type';

export const AddNewItemScreeBackButton: FC<
  AddNewItemScreenBackButtonPropsType
> = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={faChevronLeft} size={17} color={COLORS.white} />
    </TouchableOpacity>
  );
};
