import type { AppState } from '@/types/store.types';
import { createSelector } from '@reduxjs/toolkit';
import type { CommentItemProps, SnippetCardProps } from '@/components';

const selectSnippets = (state: AppState) => state.snippets.snippets;
const selectSnippet = (state: AppState) => state.snippets.snippet;
const selectMySnippets = (state: AppState) => state.snippets.mySnippets;
const selectUser = (state: AppState) => state.account.account?.id;
const selectLanguages = (state: AppState) => state.snippets.languages;

export const selectSnippetCardProps = (isMySnippets = false) =>
  createSelector(
    [isMySnippets ? selectMySnippets : selectSnippets, selectUser],
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

export const selectCommentsProps = createSelector(
  [selectSnippet],
  (snippet): CommentItemProps[] =>
    snippet?.comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      username: comment.user.username,
    })) || [],
);

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

export const selectLanguagesProps = createSelector([selectLanguages], (languages): string[] => [
  ...languages,
]);
