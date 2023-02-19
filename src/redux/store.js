import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactReducer from './contactSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,  
}
const persistedContactsReducer = persistReducer(persistConfig, contactReducer)
export const store = configureStore({
    reducer: {
      contacts: persistedContactsReducer,     
      filter: filterReducer,  
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export const persistor = persistStore(store);