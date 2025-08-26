import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CreatedQuestionResponce,
  CreateQuestionRequest,
  QuestionsResponse,
} from './questions.interface';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsResponse, { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: '/questions',
        params: { page, limit },
      }),
      keepUnusedDataFor: 0,
      transformResponse: (response: { data: { data: QuestionsResponse } }) => response.data.data,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    addQuestion: builder.mutation<CreatedQuestionResponce, CreateQuestionRequest>({
      query: (body) => ({
        url: '/questions',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: CreatedQuestionResponce }) => response.data,
    }),
  }),
});

export const { useGetQuestionsQuery, useAddQuestionMutation } = questionsApi;
