import { createSelector } from '@reduxjs/toolkit';
import type { AppState } from '@/types/store.types';
import type { CommentItemProps } from '@/components';

const selectSnippet = (state: AppState) => state.snippets.snippet;

export const selectCommentsProps = createSelector(
  [selectSnippet],
  (snippet): CommentItemProps[] =>
    snippet?.comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      username: comment.user.username,
    })) || [],
);
