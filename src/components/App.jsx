import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contactlist/ContactList';
import { Phonebook } from './App.styled';
import { MdMenuBook } from 'react-icons/md';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';


export default function App() {
  return (
    <Phonebook>
        <Suspense fallback={null}>
          <Outlet />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="registration" element={<Registration />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      <h2>
        <MdMenuBook />
        Phonebook
      </h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Phonebook>
  );
}
