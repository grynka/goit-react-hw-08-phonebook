import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operatons';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export const UserMenu = () => {
  const { username } = useAuth();
  const dispatch = useDispatch();

  const handleOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <Typography>Welcome, {username}</Typography>
      <Button
        style={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 700,
          textTransform: 'uppercase',
          margin: 10,
        }}
        type="button"
        onClick={handleOut}
      >
        Log out
      </Button>
    </>
  );
};
