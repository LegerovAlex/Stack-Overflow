import type { SnippetCardProps } from '@/components';
import type { AppState } from '@/types/store.types';
import { createSelector } from '@reduxjs/toolkit';

const selectSnippet = (state: AppState) => state.snippets.snippet;
const selectUser = (state: AppState) => state.auth.user?.id;

export const selectSnippetCardPropsByID = createSelector(
  [selectSnippet, selectUser],
  (snippet, currentUserId): SnippetCardProps | null => {
    if (!snippet || !snippet.id) return null;

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
  },
);
