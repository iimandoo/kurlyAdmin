import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { TableThCell, TableTdBorder } from 'theme';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { ProductsListModel } from 'models/products/ProductsListModel';

type Props = {
  data?: QueryDocumentSnapshot<ProductsListModel>[];
};
const ProductsList = ({ data }: Props) => {
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
                  <TableTdBorder sx={{ width: 1 / 9 }}>
                    <img src={item.url ?? '/img/noimage.png'} alt={item.title} width='100%' />
                  </TableTdBorder>
                  <TableTdBorder>{item.title}</TableTdBorder>
                  <TableTdBorder>{item.description}</TableTdBorder>
                  <TableTdBorder>{item.options}</TableTdBorder>
                  <TableTdBorder>{item.deliveryPrice}</TableTdBorder>
                  <TableTdBorder>{item.content}</TableTdBorder>
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
