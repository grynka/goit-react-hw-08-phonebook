import { Forms } from './ContactForm.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { getContacts } from 'redux/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const contactsName = items.map(contact => contact.name);

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleContactsCreate = event => {
    event.preventDefault();
    if (contactsName.includes(name)) {
      toast.error('данный контакт уже существует');
      return;
    } else dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    toast.success(`Контакт ${name} успешно добавлен!`);
  };

  return (
    <Forms onSubmit={handleContactsCreate}>
      <TextField
        onChange={handleChange}
        required
        label="Name"
        name="name"
        value={name}
        id="outlined-start-adornment"
        sx={{ m: 1, width: '100%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="tel"
        name="number"
        value={number}
        label="Phone"
        onChange={handleChange}
        required
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        id="outlined-start-adornment2"
        sx={{ m: 1, width: '100%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIphoneOutlinedIcon /> +38
            </InputAdornment>
          ),
        }}
      />

      <Button variant="outlined" type="submit">
        Add contact
      </Button>
      <ToastContainer />
    </Forms>
  );
}
