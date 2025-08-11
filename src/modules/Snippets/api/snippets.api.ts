import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SnippetsResponse } from './snippets.interface';

export const snippetsApi = createApi({
  reducerPath: 'snippetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSnippets: builder.query<SnippetsResponse, void>({
      query: () => '/snippets',
    }),
    likeSnippet: builder.mutation<void, string>({
      query: (id) => ({
        url: `/snippets/${id}/mark`,
        method: 'POST',
        body: { mark: 'like' },
      }),
    }),
    dislikeSnippet: builder.mutation<void, string>({
      query: (id) => ({
        url: `/snippets/${id}/mark`,
        method: 'POST',
        body: { mark: 'dislike' },
      }),
    }),
  }),
});

export const { useGetSnippetsQuery, useLikeSnippetMutation, useDislikeSnippetMutation } =
  snippetsApi;
