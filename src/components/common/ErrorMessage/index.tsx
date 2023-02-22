import React from 'react';
import Typography from '@mui/material/Typography';

type Props = { message?: string };

const ErrorMessage = (props: Props) => {
  return (
    <Typography variant='subtitle1' color='error'>
      {props.message}
    </Typography>
  );
};

export default ErrorMessage;
