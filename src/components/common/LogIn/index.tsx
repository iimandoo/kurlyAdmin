import * as React from 'react';
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import { firebaseAuth } from 'firebaseRoot';

type Props = {
  onLogIn: (displayName: string) => void;
};

function LogIn({ onLogIn }: Props) {
  const handleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).then((data: UserCredential) => {
      data.user.displayName && onLogIn(data.user.displayName);
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <GoogleIcon />
        </Avatar>
        <Typography component='h1' variant='h5' sx={{ mt: 1 }}>
          Gmail 계정으로 로그인 하세요
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Button onClick={handleLogIn} variant='contained' sx={{ mt: 3, mb: 2 }}>
            LOGIN
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default LogIn;
