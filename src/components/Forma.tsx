import * as React from 'react';
import {FC, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const Forma: FC<FormProps> = ({title, handleClick}) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);
  
const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Your Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              onClick={() => handleClick(email, pass)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {title}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export { Forma }