import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = { children: ReactNode };

const PageHead = ({ children }: Props) => {
  return (
    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' paddingBottom='3rem'>
      {children}
    </Box>
  );
};

export default PageHead;
