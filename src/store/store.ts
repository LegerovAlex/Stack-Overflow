import { authApi } from '@/modules/Auth/api/auth.api';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { snippetsApi } from '@/modules/Snippets/api/snippets.api';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [snippetsApi.reducerPath]: snippetsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, snippetsApi.middleware),
});
