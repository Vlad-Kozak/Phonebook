import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoadingRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](_, action) {
      switch (action.payload) {
        case 400:
          toast.error('Wrong email or password, please try again.');
          break;

        case 500:
          toast.error('Server error, please try again later');
          break;

        default:
          toast.error('Error');
      }
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected](_, action) {
      switch (action.payload) {
        case 400:
          toast.error('Wrong email or password, please try again.');
          break;

        default:
          toast.error('Error');
      }
    },
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](_, action) {
      switch (action.payload) {
        case 500:
          toast.error('Server error, please try again later');
          break;

        default:
          toast.error('Error');
      }
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoadingRefresh = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.data.name;
      state.user.email = action.payload.data.email;
      state.isLoggedIn = true;
      state.isLoadingRefresh = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isLoadingRefresh = false;
    },
  },
});

export default authSlice.reducer;
