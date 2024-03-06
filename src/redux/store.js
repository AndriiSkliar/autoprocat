import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { autosReducer } from './autos/autos.reducer';
import { modalReducer } from './modal/modal.reducer';

const autosConfig = {
  key: 'autos',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    autosStore: persistReducer(autosConfig, autosReducer),
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
