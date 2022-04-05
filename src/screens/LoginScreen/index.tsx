import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { googleSignInSagaAction } from '../../redux/actions/authSagaActions/googleSignInSagaAction';
import { facebookSignInSagaAction } from '../../redux/actions/authSagaActions/facebookSignInSagaAction';
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { COLORS } from '../../COLORS';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();

  const fontStyle = style.font;
  const button = style.button;

  const googleObject = {
    signInMethod: () => dispatch(googleSignInSagaAction()),
    title: 'Sign in with Google',
    styleFont: { ...fontStyle, ...style.fontGoogle },
    styleContainer: { ...button, ...style.googleButton },
    icon: faGooglePlusG,
    iconColor: COLORS.punch,
  };

  const facebookObject = {
    signInMethod: () => dispatch(facebookSignInSagaAction()),
    title: 'Sign in with Facebook',
    styleFont: { ...fontStyle, ...style.fontFacebook },
    styleContainer: {
      ...button,
      ...style.facebookButton,
    },
    icon: faFacebook,
    iconColor: COLORS.sanMarino,
  };

  return (
    <View style={style.container}>
      <Image style={style.img} source={require('./todo.png')} />
      <SignInButton options={googleObject} />
      <SignInButton options={facebookObject} />
    </View>
  );
};
