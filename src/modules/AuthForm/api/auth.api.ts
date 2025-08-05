import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/consts/api.consts';
import type { UserResponse, AuthParams } from './auth.interface';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    register: builder.mutation<UserResponse, AuthParams>({
      query: ({ username, password }) => ({
        url: '/register',
        method: 'POST',
        body: { username, password },
      }),
    }),
    login: builder.mutation<UserResponse, AuthParams>({
      query: ({ username, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { username, password },
      }),
    }),
    getCurrentUser: builder.query<UserResponse, void>({
      query: () => '/auth',
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetCurrentUserQuery, useLogoutMutation } =
  authApi;
