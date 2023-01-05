import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Phonebook } from './App.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Phonebook>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </Phonebook>

    </>
  );
};
