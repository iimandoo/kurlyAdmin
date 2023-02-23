import * as React from 'react';
import { GoogleAuthProvider, signInWithPopup, UserCredential, User, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import { firebaseAuth } from 'firebaseRoot';

const Auth = () => {
  const [logInData, setLogInData] = React.useState<User | null>(null);

  const handleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).then((data: UserCredential) => {
      setLogInData(data.user);
    });
  };

  const handleLogOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        setLogInData(null);
      })
      .catch();
  };
  return (
    <>
      {logInData ? (
        <>
          {logInData.displayName} <Button onClick={handleLogOut}>로그아웃</Button>
        </>
      ) : (
        <Button onClick={handleLogIn}>login</Button>
      )}
    </>
  );
};

export default Auth;
