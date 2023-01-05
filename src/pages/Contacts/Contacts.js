import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/Contactlist/ContactList';
import { MdMenuBook } from 'react-icons/md';

const Contacts = () => {
  return (
    <>
      <h2>
        <MdMenuBook />
        Phonebook
      </h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
