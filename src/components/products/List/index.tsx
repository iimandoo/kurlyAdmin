import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from 'theme';

const ProductsList = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='상품리스트테이블'>
          <TableHead>
            <TableRow>
              <StyledTableCell component='th' scope='row'>
                상품명
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                설명
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                옵션
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                배송비
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                상세
              </StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsList;
