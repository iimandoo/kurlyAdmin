import * as React from 'react';
import { signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import { firebaseAuth } from 'firebaseRoot';

type Props = {
  displayName: string;
  onLogOut: (displayName: string) => void;
};

function Auth({ displayName, onLogOut }: Props) {
  const handleLogOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        onLogOut('');
      })
      .catch(() => {
        console.log('logout error');
      });
  };
  return (
    <>
      {displayName && (
        <>
          {displayName} <Button onClick={handleLogOut}>로그아웃</Button>
        </>
      )}
    </>
  );
}

export default Auth;
