import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import HeadPageWrapper from 'components/common/PageWrapper';

const ProductsListPage = () => {
  return (
    <HeadPageWrapper>
      <Box display='flex' flexDirection='row'>
        <Typography variant='h1'>상품 리스트</Typography>
        <Link to='/products/new'>상품등록</Link>
      </Box>
      <Box>
        <table>
          <thead>
            <tr>
              <th>번호</th>
            </tr>
          </thead>
        </table>
      </Box>
    </HeadPageWrapper>
  );
};

export default ProductsListPage;
