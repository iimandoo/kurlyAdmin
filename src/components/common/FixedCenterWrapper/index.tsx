import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = { children: ReactNode };

const AdminFixedCenterWrapper = ({ children }: Props) => {
  return (
    <Box display='flex' justifyContent={'center'} padding={5} gap={4}>
      {children}
    </Box>
  );
};

export default AdminFixedCenterWrapper;
