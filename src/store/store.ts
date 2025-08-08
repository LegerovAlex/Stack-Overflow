import { authApi } from '@/modules/AuthForm/api/auth.api';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
