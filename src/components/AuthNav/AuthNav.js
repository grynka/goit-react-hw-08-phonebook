import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </>
  );
};
