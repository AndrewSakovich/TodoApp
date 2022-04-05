import React, { FC, useState } from 'react';
import { Image, View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { googleSignInSagaAction } from '../../redux/actions/authSagaActions/googleSignInSagaAction';
import { facebookSignInSagaAction } from '../../redux/actions/authSagaActions/facebookSignInSagaAction';
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { COLORS } from '../../COLORS';
import { SkypeIndicator } from 'react-native-indicators';

export const LoginScreen: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const callback = () => {
    setLoading(true);
  };
  const fontStyle = style.font;
  const button = style.button;

  const loginScreenImagePath = require('./todo.png');

  const googleObject = {
    signInMethod: () => {
      dispatch(googleSignInSagaAction({ callback }));
    },
    title: 'Sign in with Google',
    styleFont: { ...fontStyle, ...style.fontGoogle },
    styleContainer: { ...button, ...style.googleButton },
    icon: faGooglePlusG,
    iconColor: COLORS.punch,
  };

  const facebookObject = {
    signInMethod: () => {
      dispatch(facebookSignInSagaAction({ callback }));
    },
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
      {isLoading && (
        <SkypeIndicator
          style={style.loader}
          size={70}
          color={COLORS.sapphire}
        />
      )}
      <Image style={style.img} source={loginScreenImagePath} />
      <SignInButton options={googleObject} disable={isLoading} />
      <SignInButton options={facebookObject} disable={isLoading} />
    </View>
  );
};
