import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Header from 'components/Header';
import Body from 'components/Body';
import Menu from 'components/Menu';
import StatusBar from 'components/StatusBar';
import { Item } from 'helpers/materialStyle';

const Mainlayout = () => {

    const {isAuth} = useAuth();

  return isAuth ? (
    <div>
        <StatusBar/>      
        
        <Box sx={{ flexGrow: 1,
                   width: '80%',
                   margin: '0 auto',
                   }}>
          <Grid container spacing={2}>
            <Header/>
            <Menu/>
            <Grid xs={6} md={9}>
                <Item> <Outlet/></Item>
            </Grid>
          </Grid>
        </Box>
    
    </div>
  ) : (
    <Navigate to='/login'/>
  )
}

export default Mainlayout