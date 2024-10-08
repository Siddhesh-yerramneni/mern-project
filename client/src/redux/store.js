import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key : 'root',
    storage,
    version: 1, 
}

const persistRreducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistRreducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);