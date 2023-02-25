import * as React from 'react';
import { GoogleAuthProvider, signInWithPopup, UserCredential, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import { firebaseAuth } from 'firebaseRoot';

type AuthProps = {
  displayName: string;
  onLogIn: (displayName: string) => void;
  onLogOut: (displayName: string) => void;
};

function Auth({ displayName, onLogIn, onLogOut }: AuthProps) {
  const handleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).then((data: UserCredential) => {
      data.user.displayName && onLogIn(data.user.displayName);
    });
  };

  const handleLogOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        onLogOut('');
      })
      .catch();
  };
  return (
    <>
      {displayName ? (
        <>
          {displayName} <Button onClick={handleLogOut}>로그아웃</Button>
        </>
      ) : (
        <Button onClick={handleLogIn}>login</Button>
      )}
    </>
  );
}

export default Auth;
