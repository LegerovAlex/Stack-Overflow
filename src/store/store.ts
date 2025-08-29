import { authApi } from '@/modules/Auth/api/auth.api';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { snippetsApi } from '@/modules/Snippets/api/snippets.api';
import { snippetsReducer } from '@/modules/Snippets/api/snippetsSlice';
import { accountApi } from '@/modules/Account/api/account.api';
import { accountReducer } from '@/modules/Account/api/accountSlice';
import { usersApi } from '@/modules/Users/api/users.api';
import { statisticsApi } from './Statistics/statistics.api';
import { questionsApi } from '@/modules/Questions/api/questions.api';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [snippetsApi.reducerPath]: snippetsApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    auth: authReducer,
    snippets: snippetsReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      snippetsApi.middleware,
      accountApi.middleware,
      usersApi.middleware,
      statisticsApi.middleware,
      questionsApi.middleware,
    ),
});
