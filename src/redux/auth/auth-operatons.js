import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const register = createAsyncThunk('auth/tegister', async credentials =>{
    try {
        const { data } = await axios.post('user/signup', credentials);
        return data;
    } catch (error) {
        
    }
})