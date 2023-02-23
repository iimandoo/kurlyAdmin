import React from 'react';
import { Button, Typography } from '@mui/material';
import PageWrapper from 'components/common/PageWrapper';
import PageHead from 'components/common/PageHead';
import ProductsList from 'components/products/List';

const ProductsListPage = () => {
  return (
    <PageWrapper>
      <PageHead>
        <Typography variant='h1'>상품리스트</Typography>

        <Button variant='contained' href='/products/new'>
          상품등록
        </Button>
      </PageHead>

      <ProductsList></ProductsList>
    </PageWrapper>
  );
};

export default ProductsListPage;
