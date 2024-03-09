
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userslice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage, // Correct usage of storage
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Renamed variable to avoid conflict

export const store = configureStore({
  reducer: persistedReducer, // Correct usage of persistedReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
