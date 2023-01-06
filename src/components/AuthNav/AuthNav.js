import { Link } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <>
      <Link to="/registration">
      Registration
      </Link>
      <Link to="/login">
      Login
      </Link>
    </>
  );
};
