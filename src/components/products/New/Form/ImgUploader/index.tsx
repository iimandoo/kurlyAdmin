import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from 'theme';
import AdminImageUploader from 'components/common/ImageUploader';

type Props = {
  onUploaded: (uploadedUrl: string) => void;
};

const ProductsNewFormImgUploader = (props: Props) => {
  const [uploadedUrl, setUploadedUrl] = useState('');

  const onUploaded = (uploadedUrl: string) => {
    setUploadedUrl(uploadedUrl);
    props.onUploaded(uploadedUrl);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label='이미지 업로드' style={{ minWidth: '600px' }}>
        <TableBody>
          <TableRow>
            <StyledTableCell component='th' scope='row' width={200}>
              대표 이미지
            </StyledTableCell>
            <TableCell>
              <AdminImageUploader onUploaded={onUploaded} />
              {uploadedUrl && (
                <p className='pt-10'>
                  <img src={`${uploadedUrl}`} alt='' className=' w-60' />
                  <br />
                  {uploadedUrl}
                </p>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsNewFormImgUploader;
