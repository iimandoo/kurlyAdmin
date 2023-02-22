import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';

type Props = { children: ReactNode };

const PageHead = ({ children }: Props) => {
  return (
    <Box display='flex' flexDirection='row' justifyContent='space-between'>
      {children}
      <Divider style={{ marginBottom: '3rem' }} />
    </Box>
  );
};

export default PageHead;
