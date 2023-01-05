
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshuser } from 'redux/auth/operatons';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Registration/Registration'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshuser())
  }, [dispatch])
  return (
    !isRefreshing &&
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/login" element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts"/>} />
            <Route path="/contacts" element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />} />
            </Route>
          </Routes>
  );
}
