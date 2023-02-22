import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from 'theme';
import ErrorMessage from 'components/common/ErrorMessage';

type Props = {
  uploadedUrl: string;
};

const ProductsNewFormCreate = (props: Props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { field: titleField } = useController({
    name: 'title',
    defaultValue: '',
    control,
    rules: {
      required: { value: true, message: '상품명을 입력하세요' },
    },
  });
  const { field: descriptionField } = useController({
    name: 'description',
    defaultValue: '',
    control,
    rules: {
      required: { value: true, message: '설명을 입력하세요' },
    },
  });
  const { field: optionsField } = useController({
    name: 'options',
    defaultValue: '',
    control,
    rules: {
      required: { value: true, message: '옵션을 입력하세요' },
    },
  });
  const { field: deliveryPriceField } = useController({
    name: 'deliveryPrice',
    defaultValue: '',
    control,
    rules: {
      required: { value: true, message: '배송비를 입력하세요' },
    },
  });
  const { field: contentField } = useController({
    name: 'content',
    defaultValue: '',
    control,
    rules: {
      required: { value: true, message: '설명을 입력하세요' },
    },
  });

  return (
    <>
      {props.uploadedUrl && <input type='hidden' {...register('url')} value={props.uploadedUrl} />}
      <TableContainer component={Paper}>
        <Table aria-label='상품등록테이블'>
          <TableBody>
            <TableRow>
              <StyledTableCell component='th' scope='row' width={200}>
                상품명
              </StyledTableCell>
              <TableCell>
                <TextField {...titleField} fullWidth />
                {errors.title && <ErrorMessage message={errors.title?.message?.toString()} />}
              </TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell component='th' scope='row'>
                설명
              </StyledTableCell>
              <TableCell>
                <TextField {...descriptionField} fullWidth />
                {errors.description && <ErrorMessage message={errors.description?.message?.toString()} />}
              </TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell component='th' scope='row'>
                옵션
              </StyledTableCell>
              <TableCell>
                <p className='text-sm mb-2'>
                  옵션명=가격 형태로 입력하세요. <br />, 로 구분합니다.'
                </p>
                <TextField label='옵션 예) sm=1000, xl=2000' {...optionsField} fullWidth />
                {errors.options && <ErrorMessage message={errors.options?.message?.toString()} />}
              </TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell component='th' scope='row'>
                배송비
              </StyledTableCell>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TextField {...deliveryPriceField} /> 원
                </div>
                {errors.deliveryPrice && <ErrorMessage message={errors.deliveryPrice?.message?.toString()} />}
              </TableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell component='th' scope='row'>
                상세
              </StyledTableCell>
              <TableCell>
                <TextField {...contentField} fullWidth multiline />
                {errors.content && <ErrorMessage message={errors.content?.message?.toString()} />}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsNewFormCreate;
