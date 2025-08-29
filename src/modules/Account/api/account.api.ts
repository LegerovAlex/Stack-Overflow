import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  ApiAccountResponce,
  UpdateAccountResponse,
  UpdatePasswordRequest,
  UpdateUsernameRequest,
} from './account.interface';
import { accountAction } from './accountSlice';
import { authAction } from '@/store/Auth/authSlice';
import { snippetsApi } from '@/modules/Snippets/api/snippets.api';
import { questionsApi } from '@/modules/Questions/api/questions.api';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Account'],
  endpoints: (builder) => ({
    getAccount: builder.query<ApiAccountResponce, void>({
      query: () => '/me',
      providesTags: ['Account'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(accountAction.setAccount(data.data));
          dispatch(authAction.setAuthenticated());
        } catch {
          dispatch(accountAction.clearAccount());
          dispatch(authAction.clearAuthenticated());
        }
      },
    }),
    deleteAccount: builder.mutation<void, void>({
      query: () => ({
        url: '/me',
        method: 'DELETE',
      }),
    }),
    updateUsername: builder.mutation<UpdateAccountResponse, UpdateUsernameRequest>({
      query: (body) => ({ url: '/me', method: 'PATCH', body }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(accountAction.setAccount(data.data));
        dispatch(snippetsApi.util.invalidateTags(['Snippets']));
        dispatch(questionsApi.util.invalidateTags(['Questions']));
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
