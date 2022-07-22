import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

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
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
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
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isLoadingRefresh = false;
    },
  },
});

export default authSlice.reducer;
