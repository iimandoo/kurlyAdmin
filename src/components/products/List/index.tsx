import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { TableThCell } from 'theme';
import { useProductsListQuery } from 'api/products/list/useProductsListQuery';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { ProductsListModel } from 'models/products/ProductsListModel';

const ProductsList = () => {
  const { data } = useProductsListQuery();

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='상품리스트테이블'>
          <TableHead>
            <TableRow>
              <TableThCell component='th' scope='row' align='center'>
                상품사진
              </TableThCell>
              <TableThCell component='th' scope='row' align='center'>
                상품명
              </TableThCell>
              <TableThCell component='th' scope='row' align='center'>
                설명
              </TableThCell>
              <TableThCell component='th' scope='row' align='center'>
                옵션
              </TableThCell>
              <TableThCell component='th' scope='row' align='center'>
                배송비
              </TableThCell>
              <TableThCell component='th' scope='row' align='center'>
                상세
              </TableThCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((doc: QueryDocumentSnapshot<ProductsListModel>) => {
              const item = doc.data();
              return (
                <TableRow key={`products-${item.id}`}>
                  <TableCell>
                    {item.url}
                    <br />
                    <img src={item.url} alt={item.title} />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.options}</TableCell>
                  <TableCell>{item.deliveryPrice}</TableCell>
                  <TableCell>{item.content}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsList;
