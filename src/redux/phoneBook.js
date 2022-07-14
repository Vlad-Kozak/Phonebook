import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const phoneBook = createSlice({
  name: 'phoneBook',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, { payload: { name, number } }) {
      if (state.items.some(el => el.name === name)) {
        alert(`${name} is already in contacts.`);
        return;
      }

      state.items.push({
        id: nanoid(),
        name,
        number,
      });
    },

    deleteContact(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload.id);
    },

    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const phonebookPersistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

export const { addContact, deleteContact, filterContacts } = phoneBook.actions;
export const persistedReducer = persistReducer(
  phonebookPersistConfig,
  phoneBook.reducer
);
