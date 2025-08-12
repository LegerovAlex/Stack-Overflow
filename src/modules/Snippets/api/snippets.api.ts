import { BASE_URL } from '@/consts/api.consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type MarkSnippetRequest, type ApiSnippetsResponse } from './snippets.interface';
import { snippetsAction } from './snippetsSlice';

export const snippetsApi = createApi({
  reducerPath: 'snippetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSnippets: builder.query<ApiSnippetsResponse, void>({
      query: () => '/snippets',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(snippetsAction.setSnippets(data.data.data));
      },
    }),
    markSnippet: builder.mutation<void, MarkSnippetRequest>({
      query: ({ id, mark }) => ({
        url: `/snippets/${id}/mark`,
        method: 'POST',
        body: { mark },
      }),
    }),
  }),
});

export const { useGetSnippetsQuery, useMarkSnippetMutation } = snippetsApi;
