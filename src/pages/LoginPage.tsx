import { Login } from 'components/Login';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const LoginPage = () => {
  return (
    <div>
      <Box sx={{width: '30%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
          <Login/>
          <p>or <Link to='/register'>register</Link></p>
        </Box>
    </div>
  )
}

export default LoginPage