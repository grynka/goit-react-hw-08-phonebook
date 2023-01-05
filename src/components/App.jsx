
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { Phonebook } from './App.styled';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Registration/Registration'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));


export default function App() {
  return (
    <Phonebook>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            </Route>
          </Routes>
    </Phonebook>
  );
}
