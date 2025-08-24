import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiUsersResponce } from './users.interface';
import type { User } from '@/interfaces/api.interfaces';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (buildier) => ({
    getUsers: buildier.query<User[], void>({
      query: () => '/users',
      transformResponse: (res: { data: ApiUsersResponce }): User[] => res.data.data || [],
    }),
    getUser: buildier.query<User, string>({
      query: (id) => `/users/${id}`,
      transformResponse: (res: { data: User }) => res.data || null,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
