import { Container } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

const PageWrapper = ({ children }: Props) => {
  return <Container style={{ padding: '3rem' }}>{children}</Container>;
};

export default PageWrapper;
