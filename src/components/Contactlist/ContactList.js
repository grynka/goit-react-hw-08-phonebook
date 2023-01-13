import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { getError, getIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operation';
import { List, BtnDel, Item, Circle, Trash } from './ContactList.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactId = contactId => {
    dispatch(deleteContact(contactId));
    toast.success(`Контакт успешно удален!`);
  };

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && toast.error({ error })}
      <List>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <Circle>{name.charAt(0).toUpperCase()}</Circle>
              {name}, {number}{' '}
              <BtnDel onClick={() => deleteContactId(id)}>
                <Trash />
              </BtnDel>
            </Item>
          ))}
      </List>
      <ToastContainer />
    </>
  );
};

export default ContactList;
