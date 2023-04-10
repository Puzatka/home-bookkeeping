import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAppDispatch } from 'hooks/redux-hooks';
import { removeUser } from 'store/slices/userSlice';
import { useAuth } from 'hooks/use-auth';
import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'left',
//   color: theme.palette.text.secondary,
// }));

// const useStyles: any = styled(AppBar)(({ theme }) => ({
// statusBar: { 
//   marginBottom: theme.spacing(2),
//  }
// }));

 const StatusBar = () => {

  const dispatch = useAppDispatch();

  const {email} = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
              marginBottom: '24px',
    
  }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Finances
          </Typography>
          <Button 
            variant="outlined"
            color="inherit"
            onClick={() => dispatch(removeUser())}
          >
            LogOut from {email}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default StatusBar;