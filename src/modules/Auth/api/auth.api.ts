import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/consts/api.consts';
import type { AuthParams } from './auth.interface';
import { authAction } from '@/store/Auth/authSlice';
import type { User as UserResponse } from '@/store/Auth/auth.interface';

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
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query<{ data: UserResponse }, void>({
      query: () => '/auth',
      providesTags: ['User'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(authAction.setUser(data.data));
        } catch {
          dispatch(authAction.clearUser());
        }
      },
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
