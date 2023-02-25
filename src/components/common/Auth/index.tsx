import * as React from 'react';
import { signOut } from 'firebase/auth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Avatar sx={{ marginRight: 1, width: '2rem', height: '2rem' }}>
            <FaceIcon />
          </Avatar>
          <Typography>{displayName}</Typography>
          <Button onClick={handleLogOut} variant='outlined' size='small' sx={{ ml: 1 }}>
            LOGOUT
          </Button>
        </Box>
      )}
    </>
  );
}

export default Auth;
