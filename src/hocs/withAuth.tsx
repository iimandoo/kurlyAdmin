import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/';
import LoginPage from 'pages/login';
import AppRouter from '../AppRouter';

const withAuth = () => {
  const displayName = useSelector((state: RootState) => state.authReducer.displayName);

  return <>{displayName ? <AppRouter /> : <LoginPage />}</>;
};

export default withAuth;
