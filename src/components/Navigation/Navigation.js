import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Navigate } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Navigate>
      <NavLink
        to="/"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 700,
          textTransform: 'uppercase',
          margin: 10,
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 700,
            textTransform: 'uppercase',
            margin: 10,
          }}
        >
          Contacts
        </NavLink>
      )}
    </Navigate>
  );
};
