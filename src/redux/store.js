import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './phoneBook';

const store = configureStore({ reducer: { phoneBook: persistedReducer } });
const persistor = persistStore(store);

export { store, persistor };
