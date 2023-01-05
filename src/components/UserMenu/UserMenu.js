import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operatons';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const { username } = useAuth();
  const dispatch = useDispatch();

  const handleOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <p>Welcome, {username} | </p>
      <Button color="inherit" type="button" onClick={handleOut}>
        Log out
      </Button>
    </>
  );
};
