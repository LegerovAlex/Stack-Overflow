import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UsersApiResponce } from './users.interface';
import type { User } from '@/interfaces/api.interfaces';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.infiniteQuery<UsersApiResponce, void, number>({
      query: ({ pageParam = 1 }) => ({
        url: '/users',
        params: { page: pageParam, limit: 7 },
      }),
      transformResponse: (responce: { data: UsersApiResponce }) => responce.data,
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          return lastPage.meta.currentPage < lastPage.meta.totalPages
            ? lastPage.meta.currentPage + 1
            : undefined;
        },
      },
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      transformResponse: (res: { data: User }) => res.data || null,
    }),
  }),
});

export const { useGetUsersInfiniteQuery, useGetUserQuery } = usersApi;
