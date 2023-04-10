import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Header from 'components/Header';
import Body from 'components/Body';
import Menu from 'components/Menu';
import StatusBar from 'components/StatusBar';

const HomePage = () => {

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
            <Body/>
          </Grid>
        </Box>
    
    </div>
  ) : (
    <Navigate to='/login'/>
  )
}

export default HomePage