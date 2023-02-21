import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import { Box } from '@mui/material';

const ContainerPage = () => {
  return (
    <Box height='100%' display='flex' flexDirection='row'>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default ContainerPage;
