import SignIn from 'components/SignIn';
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const RegisterPage = () => {
  return (
    <div>
      <Box sx={{width: '30%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
          <SignIn/>
          <p>Already have an account? <Link to='/login'>Sign in</Link></p>
        </Box>
    </div>
  )
}

export default RegisterPage