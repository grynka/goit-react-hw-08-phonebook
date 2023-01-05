import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Navigate } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Navigate>
      <NavLink>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink>
          Contacts
        </NavLink>
      )}
    </Navigate>
  );
};
