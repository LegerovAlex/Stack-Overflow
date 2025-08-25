import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiUsersResponce } from './users.interface';
import type { User } from '@/interfaces/api.interfaces';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], { page: number; limit: number }>({
      query: ({ page, limit }) => `/users?page=${page}&limit=${limit}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: (res: { data: ApiUsersResponce }): User[] => res.data.data || [],
      keepUnusedDataFor: 0,
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      transformResponse: (res: { data: User }) => res.data || null,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
