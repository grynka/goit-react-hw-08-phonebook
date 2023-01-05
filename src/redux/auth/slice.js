import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshuser, register } from './operatons';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => { 
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        if (action.error.message === "Rejected") {
          alert('ошибка регистрации, введенные данные не коректны')
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        if (action.error.message === "Rejected") {
          alert('ошибка входа, введенные данные не коректны')
        }
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshuser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
    }
});
export const authReducer = authSlice.reducer;
