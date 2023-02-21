import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import ProductsNewFormCreate from 'components/products/New/Form/create';
import ProductsNewFormImgUploader from 'components/products/New/Form/imgUploader';
import { ProductsCreateForm } from 'models/products/ProductsCreateForm';
import FixedCenterWrapper from 'components/common/FixedCenterWrapper';
import { useProductsCreateUpdateMutation } from 'api/products/create/useProductsCreateUpdateMethodMutation';
import Dialog from 'components/common/Dialog';
import { Button } from '@mui/material';
import PageWrapper from 'components/common/PageWrapper';
import PageHead from 'components/common/PageHead';

const ProductsNewPage = () => {
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [dialog, setDialog] = React.useState({ isOpen: false, message: '' });

  const onUploaded = (url: string) => {
    setUploadedUrl(url);
  };
  const methods = useForm<ProductsCreateForm>();

  const { mutateAsync: mutateAdminProductsCreateUpdate } = useProductsCreateUpdateMutation();

  const onSubmit = async (formData: ProductsCreateForm) => {
    try {
      await mutateAdminProductsCreateUpdate(formData);
      setDialog({ isOpen: true, message: '등록하였습니다.' });
    } catch (e) {
      setDialog({ isOpen: true, message: '등록에 실패했습니다.' });
    }
  };

  const handleDialogClose = () => {
    setDialog({ isOpen: false, message: dialog.message });
  };

  return (
    <PageWrapper>
      <PageHead>상품 등록</PageHead>

      <ProductsNewFormImgUploader onUploaded={onUploaded}></ProductsNewFormImgUploader>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductsNewFormCreate uploadedUrl={uploadedUrl}></ProductsNewFormCreate>
          <FixedCenterWrapper>
            <Button variant='contained' size='large' type='submit'>
              등록
            </Button>
            <Button variant='outlined' size='large'>
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