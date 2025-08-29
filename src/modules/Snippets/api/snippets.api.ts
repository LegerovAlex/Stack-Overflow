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
    getSnippets: builder.infiniteQuery<ApiSnippetsResponse, void, number>({
      query: ({ pageParam = 1 }) => ({
        url: '/snippets',
        params: { page: pageParam, limit: 7 },
      }),
      transformResponse: (response: { data: ApiSnippetsResponse }) => response.data,
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
          lastPage.meta.currentPage < lastPage.meta.totalPages
            ? lastPage.meta.currentPage + 1
            : undefined,
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const snippets = data.pages.flatMap((page: ApiSnippetsResponse) => page.data);
        dispatch(snippetsAction.setSnippets(snippets));
      },
    }),
    getMySnippets: builder.query<ApiSnippetsResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: '/snippets',
        params: { userId },
      }),
      providesTags: ['Snippets'],
      transformResponse: (resp: { data: ApiSnippetsResponse }) => resp.data,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(snippetsAction.setMySnippets(data.data));
      },
    }),
    getSnippet: builder.query<ApiSnippetResponce, string>({
      query: (id) => `/snippets/${id}`,
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
    deleteSnippet: builder.mutation<void, string>({
      query: (id) => ({
        url: `/snippets/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(snippetsAction.removeSnippet({ snippetId: id }));
      },
    }),
  }),
});

export const {
  useGetMySnippetsQuery,
  useGetSnippetsInfiniteQuery,
  useMarkSnippetMutation,
  useGetSnippetQuery,
  useAddCommentMutation,
  useGetLanguagesQuery,
  useAddSnippetMutation,
  useDeleteSnippetMutation,
} = snippetsApi;
