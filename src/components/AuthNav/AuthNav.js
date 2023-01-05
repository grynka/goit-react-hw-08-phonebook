import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink
        style={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 500,
          textTransform: 'uppercase',
          margin: 10,
        }}
        to="/registration"
      >
        Registration
      </NavLink>
      <NavLink
        style={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 500,
          textTransform: 'uppercase',
          margin: 10,
        }}
        to="/login"
      >
        Login
      </NavLink>
    </>
  );
};
