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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'email':
        setEmail(event.currentTarget.value);
        break;

      case 'password':
        setPassword(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    toast.success('Login success');
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          label="Email"
          name="email"
          id="outlined-start-adornment2"
          sx={{ m: 1, width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="password"
            onChange={handleChange}
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

        <Button variant="outlined" type="submit">
          Log in
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
}
