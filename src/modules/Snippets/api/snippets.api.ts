import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  type AddCommentRequest,
  type AddSnippetRequest,
  type ApiCommentResponce,
  type ApiLanguageResponce,
  type ApiSnippetCreateResponse,
  type ApiSnippetResponce,
  type ApiSnippetsResponse,
  type MarkSnippetRequest,
} from './snippets.interface';
import { snippetsAction } from './snippetsSlice';

export const snippetsApi = createApi({
  reducerPath: 'snippetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Snippets'],
  endpoints: (builder) => ({
    getSnippets: builder.query<ApiSnippetsResponse, { userId?: string } | void>({
      query: (body) => (body?.userId ? `/snippets?userId=${body.userId}` : '/snippets'),
      providesTags: ['Snippets'],
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (body?.userId) {
          dispatch(snippetsAction.setMySnippets(data.data.data));
        } else {
          dispatch(snippetsAction.setSnippets(data.data.data));
        }
      },
    }),
    getSnippet: builder.query<ApiSnippetResponce, string>({
      query: (id) => `/snippets/${id}`,
      keepUnusedDataFor: 0,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(snippetsAction.setSnippet(data.data));
      },
    }),
    markSnippet: builder.mutation<void, MarkSnippetRequest>({
      query: ({ id, mark }) => ({
        url: `/snippets/${id}/mark`,
        method: 'POST',
        body: { mark },
      }),
    }),
    addComment: builder.mutation<ApiCommentResponce, AddCommentRequest>({
      query: (body) => ({
        url: '/comments',
        method: 'POST',
        body,
      }),
    }),
    getLanguages: builder.query<ApiLanguageResponce, void>({
      query: () => '/snippets/languages',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(snippetsAction.setLanguages(data.data));
      },
    }),
    addSnippet: builder.mutation<ApiSnippetCreateResponse, AddSnippetRequest>({
      query: (body) => ({
        url: '/snippets',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Snippets'],
    }),
  }),
});

export const {
  useGetSnippetsQuery,
  useMarkSnippetMutation,
  useGetSnippetQuery,
  useAddCommentMutation,
  useGetLanguagesQuery,
  useAddSnippetMutation,
} = snippetsApi;
