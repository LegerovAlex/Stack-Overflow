import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ApiAccountResponce,
  UpdateAccountResponse,
  UpdatePasswordRequest,
  UpdateUsernameRequest,
} from './api.interface';
import { accountAction } from './accountSlice';
import { authAction } from '@/store/Auth/authSlice';
import { snippetsAction } from '@/modules/Snippets/api/snippetsSlice';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAccount: builder.query<ApiAccountResponce, void>({
      query: () => '/me',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(accountAction.setAccount(data.data));
      },
    }),
    deleteAccount: builder.mutation<void, void>({
      query: () => ({
        url: '/me',
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(accountAction.setAccount(null));
        dispatch(accountApi.util.resetApiState());
      },
    }),
    updateUsername: builder.mutation<UpdateAccountResponse, UpdateUsernameRequest>({
      query: (body) => ({ url: '/me', method: 'PATCH', body }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(accountAction.setAccount(data.data));
        dispatch(authAction.setUser(data.data));
        dispatch(snippetsAction.updateUsernameInComments(data.data));
      },
    }),
    updatePassword: builder.mutation<UpdateAccountResponse, UpdatePasswordRequest>({
      query: (body) => ({ url: '/me/password', method: 'PATCH', body }),
    }),
  }),
});

export const {
  useGetAccountQuery,
  useDeleteAccountMutation,
  useUpdateUsernameMutation,
  useUpdatePasswordMutation,
} = accountApi;
