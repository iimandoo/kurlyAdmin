import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Auth from 'components/common/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { logOut } from 'store/auth/actions';

const Navbar = () => {
  const displayName = useSelector((state: RootState) => state.authReducer.displayName);
  const dispatch = useDispatch();

  const handleLogOut = (displayName: string) => {
    dispatch(logOut(displayName));
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      padding='30px'
      sx={{
        bgcolor: grey[100],
      }}>
      <nav>
        <Link to='/' className='logo'>
          <span className='font-brand'>Kurly </span> Clone Admin
        </Link>
        <Box style={{ marginTop: '20px' }}>
          <Auth displayName={displayName} onLogOut={handleLogOut} />
        </Box>
        <Divider style={{ marginTop: '20px' }} />
        <List sx={{ height: '100%' }}>
          <ListItem disablePadding>
            <ListItemButton href='/products/list'>
              <ListItemText primary='상품' sx={{ fontWeight: 700, fontSize: '2rem' }} />
            </ListItemButton>
          </ListItem>
        </List>
        {/* 
          <Link to='/banners/list'>배너</Link>
          <Link to='/banners/display'>배너 게시</Link>
          <Link to='/products/new'>신상품</Link>
          <Link to='/products/best'>베스트</Link>
          <Link to='/member/list'>회원</Link>
         <button>Kurly로 이동</button>  */}
      </nav>
    </Box>
  );
};

export default Navbar;
