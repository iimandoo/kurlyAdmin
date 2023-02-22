import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5F0080',
    },
    secondary: {
      main: '#EEFD53',
    },
    error: {
      main: '#DA1E28',
    },
  },
  typography: {
    h1: {
      fontSize: '40px',
      fontWeight: 600,
    },
    fontFamily: ['Noto Sans KR', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
        sizeLarge: {
          '& $label': {
            font: 'normal normal 700 0.9375rem/1.6875rem Open Sans',
          },
        },
        sizeSmall: {
          '& $label': {
            font: 'normal normal 700 0.8125rem/1.6875rem Open Sans',
          },
        },
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            padding: '8px 28px',
            fontSize: '18px',
            fontWeight: 500,
          },
        },
      ],
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '1.2rem',
          fontWeight: 600,
        },
      },
    },
  },
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.grey[200],
    fontSize: 16,
    fontWeight: 700,
  },
}));

export default theme;
