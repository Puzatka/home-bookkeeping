import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Item } from 'helpers/materialStyle';
import Informer from './Informer';
import { Box } from '@mui/material';

 const Header = () => {
    return (
        <>
            <Grid xs={6} md={12}>
                <Item style={{ backgroundImage: 'url(https://source.unsplash.com/random)',
                               backgroundSize: 'cover',
                               backgroundRepeat: 'no-repeat',
                               backgroundPosition: 'center',
                               backgroundColor: 'rgba(0, 0, 0, 0.9)',
                               height: '150px',}}>
                                <Box component="div"
                                    sx={{
                                    display: 'inline',
                                    }}
                                    >
                                      <Informer/>
                                      <Informer/>  
                                    </Box>
                </Item>
            </Grid>
        </>
    )
  }

export default Header