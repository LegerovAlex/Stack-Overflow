import type { AppState } from '@/types/store.types';
import { createSelector } from '@reduxjs/toolkit';
import type { SnippetCardProps } from '@/components';

const selectSnippets = (state: AppState) => state.snippets.snippets;
const selectUser = (state: AppState) => state.auth.user?.id;

export const selectSnippetCardProps = createSelector(
  [selectSnippets, selectUser],
  (snippets, currentUserId): SnippetCardProps[] =>
    snippets.map((snippet) => {
      const userMark = snippet.marks.find((m) => m.user.id === currentUserId);
      return {
        id: snippet.id,
        username: snippet.user.username,
        language: snippet.language,
        code: snippet.code,
        likes: snippet.marks.filter((m) => m.type === 'like').length,
        dislikes: snippet.marks.filter((m) => m.type === 'dislike').length,
        comments: snippet.comments.length,
        userMarkType: userMark?.type,
      };
    }),
);
