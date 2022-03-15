import React, { FC } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { googleSignInSagaAction } from '../../redux/actions/authSagaActions/googleSignInSagaAction';
import { facebookSignInSagaAction } from '../../redux/actions/authSagaActions/facebookSignInSagaAction';
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { COLORS } from '../../COLORS';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();

  const googleObject = {
    signInMethod: () => dispatch(googleSignInSagaAction()),
    title: 'Sign in with Google',
    styleFont: style.fontGoogle,
    styleContainer: style.googleButton,
    icon: faGooglePlusG,
    iconColor: COLORS.punch,
  };

  const facebookObject = {
    signInMethod: () => dispatch(facebookSignInSagaAction()),
    title: 'Sign in with Facebook',
    styleFont: style.fontFacebook,
    styleContainer: style.facebookButton,
    icon: faFacebook,
    iconColor: COLORS.sanMarino,
  };

  return (
    <View style={style.container}>
      <SignInButton signIn={googleObject} />
      <SignInButton signIn={facebookObject} />
      {/*</View>*/}
    </View>
  );
};
