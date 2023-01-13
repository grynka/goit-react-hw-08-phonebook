import React from 'react';
import { filterContacts } from 'redux/filterSlise';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <TextField
      label="Find contacts by Name"
      type="text"
      name="find"
      onChange={changeFilter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      id="outlined-start-adornment2"
      sx={{ m: 1, width: '100%' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Filter;
