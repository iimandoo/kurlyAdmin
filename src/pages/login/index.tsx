import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/modules/auth';
import LogIn from 'components/common/LogIn';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogIn = (displayName: string) => {
    dispatch(logIn(displayName));
  };

  return <LogIn onLogIn={onLogIn} />;
};

export default LoginPage;
