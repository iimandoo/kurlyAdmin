import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useProductsCreateMutation } from 'api/products/create/useProductsCreateMethodMutation';
import ProductsNewFormCreate from 'components/products/new/create';
import ProductsNewFormImgUploader from 'components/products/new/ImgUploader';
import { ProductsCreateFormModel } from 'models/products/ProductsCreateFormModel';
import FixedCenterWrapper from 'components/common/FixedCenterWrapper';
import Dialog from 'components/common/Dialog';
import PageWrapper from 'components/common/PageWrapper';
import PageHead from 'components/common/PageHead';

const ProductsNewPage = () => {
  const navigate = useNavigate();
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [dialog, setDialog] = React.useState({ isOpen: false, message: '' });

  const onUploaded = (url: string) => {
    setUploadedUrl(url);
  };
  const methods = useForm<ProductsCreateFormModel>();

  const { mutateAsync: mutateAdminProductsCreate } = useProductsCreateMutation();

  const onSubmit = async (formData: ProductsCreateFormModel) => {
    try {
      await mutateAdminProductsCreate(formData);
      await setDialog({ isOpen: true, message: '등록하였습니다.' });
      navigate('/products/list');
    } catch (e) {
      setDialog({ isOpen: true, message: '등록에 실패했습니다.' });
    }
  };

  const handleDialogClose = () => {
    setDialog({ isOpen: false, message: dialog.message });
  };

  return (
    <PageWrapper>
      <PageHead>
        <Typography variant='h1'>상품등록</Typography>
      </PageHead>

      <ProductsNewFormImgUploader onUploaded={onUploaded}></ProductsNewFormImgUploader>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductsNewFormCreate uploadedUrl={uploadedUrl}></ProductsNewFormCreate>
          <FixedCenterWrapper>
            <Button variant='contained' size='large' type='submit'>
              등록
            </Button>
            <Button variant='outlined' size='large' href='/products/list'>
              취소
            </Button>
          </FixedCenterWrapper>
        </form>
      </FormProvider>

      <Dialog message={dialog.message} isOpen={dialog.isOpen} onClose={handleDialogClose} />
    </PageWrapper>
  );
};

export default ProductsNewPage;
