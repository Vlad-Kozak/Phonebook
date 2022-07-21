import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logout = createAsyncThunk('/auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const savedToken = getState().auth.token;

    if (savedToken === null) {
      return rejectWithValue();
    }

    token.set(savedToken);

    try {
      const user = await axios.get('/users/current', token);
      return user;
    } catch (error) {}
  }
);

const operations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default operations;
