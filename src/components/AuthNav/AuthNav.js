import { NavLink } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';


export const AuthNav = () => {
  return (
    <ListItem disablePadding>
      <NavLink to="/registration"><ListItemButton sx={{ textAlign: 'center' }}>Registration</ListItemButton></NavLink>
      <NavLink to="/login"><ListItemButton sx={{ textAlign: 'center' }}>Log in</ListItemButton></NavLink>
    </ListItem>
  );
};
