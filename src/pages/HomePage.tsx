import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/redux-hooks';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const HomePage = () => {
    const dispatch = useAppDispatch();

    const {isAuth, email} = useAuth();

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

  return isAuth ? (
    <div>
        <h1>Welcome</h1>

        <button
            onClick={() => dispatch(removeUser())}
        > 
        LogOut from {email} 
        </button>

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={12}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
    
    </div>
  ) : (
    <Navigate to='/login'/>
  )
}

export default HomePage