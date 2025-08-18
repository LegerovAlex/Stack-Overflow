import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiAccountResponce } from './api.interface';
import { accountAction } from './accountSlice';

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
      },
    }),
  }),
});

export const { useGetAccountQuery, useDeleteAccountMutation } = accountApi;
