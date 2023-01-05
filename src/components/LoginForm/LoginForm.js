import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operatons';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(login({
         email: form.elements.email.value, 
         password: form.elements.password.value,
        })
         );
         form.reset();
  };

  return (
       <Box sx={{ width: '100%', textAlign: 'center' }}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
      <TextField
          label="Email"
          name="email"
          id="outlined-start-adornment2"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
        />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name='password'
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <p>
          <Button variant="outlined" type='submit'>Log in</Button>
        </p>
      </form>
    </Box>
  );
}
