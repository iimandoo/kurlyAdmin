import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from 'pages/NotFound';
import ContainerPage from 'pages';
import BannersListPage from 'pages/banners/list';
import BannersDisplayPage from 'pages/banners/display';
import ProductsListPage from 'pages/products/list';
import ProductsNewPage from 'pages/products/new';
import ProductsBestPage from 'pages/products/best';
import MemeberListPage from 'pages/member/list';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContainerPage />}>
          <Route index element={<ProductsNewPage />} />
          <Route path='/banners/list' element={<BannersListPage />} />
          <Route path='/banners/display' element={<BannersDisplayPage />} />
          <Route path='/products/list' element={<ProductsListPage />} />
          <Route path='/products/new' element={<ProductsNewPage />} />
          <Route path='/products/best' element={<ProductsBestPage />} />
          <Route path='/member/list' element={<MemeberListPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
