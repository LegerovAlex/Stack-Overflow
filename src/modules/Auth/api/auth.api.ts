import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/consts/api.consts';
import type { AuthParams } from './auth.interface';
import type { User as UserResponse } from '@/interfaces/api.interfaces';
import { accountApi } from '@/modules/Account/api/account.api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    register: builder.mutation<{ data: UserResponse }, AuthParams>({
      query: ({ username, password }) => ({
        url: '/register',
        method: 'POST',
        body: { username, password },
      }),
    }),
    login: builder.mutation<{ data: UserResponse }, AuthParams>({
      query: ({ username, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { username, password },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(accountApi.util.invalidateTags(['Account']));
      },
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;
