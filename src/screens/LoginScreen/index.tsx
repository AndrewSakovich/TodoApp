import React, { FC } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { googleSignInSagaAction } from '../../redux/actions/authSagaActions/googleSignInSagaAction';
import { facebookSignInSagaAction } from '../../redux/actions/authSagaActions/facebookSignInSagaAction';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { COLORS } from '../../COLORS';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();

  const googleObject = {
    signInMethod: () => dispatch(googleSignInSagaAction()),
    title: 'Sign in with Google',
    typeStyle: true,
  };

  const facebookObject = {
    signInMethod: () => dispatch(facebookSignInSagaAction()),
    title: 'Sign in with Facebook',
    typeStyle: false,
  };

  return (
    <View style={style.container}>
      <View style={style.googleButton}>
        <SignInButton signIn={googleObject} />
        <FontAwesomeIcon icon={faGooglePlusG} size={30} color={COLORS.punch} />
      </View>
      <View style={style.facebookButton}>
        <SignInButton signIn={facebookObject} />
        <FontAwesomeIcon icon={faFacebook} size={25} color={COLORS.sapphire} />
      </View>
    </View>
  );
};
