import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Divider, Typography } from '@mui/material';

type Props = { children: ReactNode };

const PageHead = ({ children }: Props) => {
  return (
    <Box>
      <Typography variant='h1' style={{ paddingBottom: '2rem' }}>
        {children}
      </Typography>
      <Divider style={{ marginBottom: '3rem' }} />
    </Box>
  );
};

export default PageHead;
