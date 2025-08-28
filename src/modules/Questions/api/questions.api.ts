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
    updateQuestion: builder.mutation<
      CreatedQuestionResponce,
      { id: string; data: CreateQuestionRequest }
    >({
      query: ({ id, data }) => ({
        url: `/questions/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Questions'],
    }),
    deleteQuestion: builder.mutation<void, string>({
      query: (id) => ({
        url: `/questions/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          questionsApi.util.updateQueryData('getQuestions', undefined, (draft) => {
            draft.pages.forEach((page) => {
              page.data = page.data.filter((q) => q.id !== id);
            });
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetQuestionsInfiniteQuery,
  useAddQuestionMutation,
  useDeleteQuestionMutation,
  useUpdateQuestionMutation,
} = questionsApi;
