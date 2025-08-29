import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { StatisticResponse } from './statistics.interfaces';

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUserStatistics: builder.query<{ data: StatisticResponse }, { id: string }>({
      query: ({ id }) => `/users/${id}/statistic`,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetUserStatisticsQuery } = statisticsApi;
