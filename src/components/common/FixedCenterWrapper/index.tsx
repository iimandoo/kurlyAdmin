import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = { children: ReactNode };

const FixedCenterWrapper = ({ children }: Props) => {
  return (
    <Box display='flex' justifyContent='center' padding={5} gap={4}>
      {children}
    </Box>
  );
};

export default FixedCenterWrapper;
