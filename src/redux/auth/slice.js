import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshuser, register } from './operatons';
import { toast } from 'react-toastify';

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
        toast.success('Registration success');
      })
      .addCase(register.rejected, (state, action) => {
        if (action.error.message === "Rejected") {
          toast.error('ошибка регистрации, введенные данные не коректны', action.error.message)
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        toast.success(`Login ${action.payload.user} success`);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        if (action.error.message === "Rejected") {
          toast.error('ошибка входа, введенные данные не коректны')
        }
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        toast.success(`LogOut ${state.user.name} success`);

      })
      .addCase(refreshuser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
    }
});
export const authReducer = authSlice.reducer;
