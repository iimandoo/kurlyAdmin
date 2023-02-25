import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import LoginPage from 'pages/login';
import AppRouter from '../AppRouter';

const withAuth = () => {
  const displayName = useSelector((state: RootState) => state.auth.displayName);

  return <>{displayName ? <AppRouter /> : <LoginPage />}</>;
};

export default withAuth;
