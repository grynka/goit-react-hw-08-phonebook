import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operatons';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import KeyIcon from '@mui/icons-material/Key';
import MailIcon from '@mui/icons-material/Mail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowPassword2 = () => setShowPassword2(show => !show);

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'email':
        setEmail(event.currentTarget.value);
        break;

      case 'password':
        setPassword(event.currentTarget.value);
        break;

      case 'confirm':
        setPassword2(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password.length < 8) {
      toast.error('Пароль должен содержать не мение 8 символов');
      return;
    }
    if (password !== password2) {
      toast.error('Пароли не совпадают');
      return;
    }
    toast.success('Registration success');
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          label="Name"
          name="name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
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
            id="outlined-adornment-password"
            onChange={handleChange}
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
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password2">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            name="confirm"
            id="outlined-adornment-password2"
            onChange={handleChange}
            type={showPassword2 ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

        <Button variant="outlined" type="submit">
          Registration
        </Button>
        <ToastContainer />
      </form>
    </>
  );
}
