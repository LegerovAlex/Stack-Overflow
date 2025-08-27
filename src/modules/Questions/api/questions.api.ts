import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CreatedQuestionResponce,
  CreateQuestionRequest,
  QuestionsApiResponse,
} from './questions.interface';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Questions'],
  endpoints: (builder) => ({
    getQuestions: builder.infiniteQuery<QuestionsApiResponse, void, number>({
      query: ({ pageParam = 1 }) => ({
        url: '/questions',
        params: { page: pageParam, limit: 6 },
      }),
      transformResponse: (response: { data: QuestionsApiResponse }) => response.data,
      providesTags: ['Questions'],
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          return lastPage.meta.currentPage < lastPage.meta.totalPages
            ? lastPage.meta.currentPage + 1
            : undefined;
        },
      },
    }),
    addQuestion: builder.mutation<CreatedQuestionResponce, CreateQuestionRequest>({
      query: (body) => ({
        url: '/questions',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: CreatedQuestionResponce }) => response.data,
      invalidatesTags: ['Questions'],
    }),
  }),
});

export const { useGetQuestionsInfiniteQuery, useAddQuestionMutation } = questionsApi;
