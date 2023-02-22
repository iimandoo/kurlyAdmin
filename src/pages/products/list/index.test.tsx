import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsListPage from '.';
import { BrowserRouter } from 'react-router-dom';

test('상품리스트 > 헤더출력', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/상품리스트/i)).toBeInTheDocument();
});

test('상품리스트 > 상품등록 링크', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByRole('link')).toBeInTheDocument();
});

test('상품리스트 > 상품등록 링크주소', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByRole('link')).toHaveAttribute('href', '/products/new');
});

test('상품리스트 > 상품등록 링크 텍스트', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/상품등록/i)).toBeInTheDocument();
});

test('상품리스트 > 리스트 > 헤더 > 상품명', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/상품명/i)).toBeInTheDocument();
});

test('상품리스트 > 리스트 > 헤더 > 설명', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/설명/i)).toBeInTheDocument();
});

test('상품리스트 > 리스트 > 헤더 > 옵션', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/옵션/i)).toBeInTheDocument();
});

test('상품리스트 > 리스트 > 헤더 > 배송비', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/배송비/i)).toBeInTheDocument();
});

test('상품리스트 > 리스트 > 헤더 > 상세', () => {
  render(<ProductsListPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/상세/i)).toBeInTheDocument();
});
