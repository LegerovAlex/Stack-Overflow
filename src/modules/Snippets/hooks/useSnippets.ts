import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetSnippetsQuery, useMarkSnippetMutation } from '../api/snippets.api';
import { selectSnippetCardProps } from '../api/snippets.selector';
import { snippetsAction } from '../api/snippetsSlice';
import type { AppState } from '@/types/store.types';
import { useNavigate } from 'react-router';
import { RoutesPaths } from '@/routes/routeesPaths';
import type { MarkType } from '@/types/snippets.types';

export const useSnippets = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useGetSnippetsQuery();
  const navigate = useNavigate();
  const userId = useSelector((state: AppState) => state.auth.user?.id);
  const [markSnippet] = useMarkSnippetMutation();

  const snippetsFromSelector = useSelector(selectSnippetCardProps);

  const handleMark = async (
    snippetId: string,
    currentType: MarkType | undefined,
    nextType: 'like' | 'dislike',
  ) => {
    if (!userId) return;

    const newMark = currentType === nextType ? 'none' : nextType;
    const prevMark = currentType ?? 'none';

    dispatch(snippetsAction.updateMarkLocal({ snippetId, mark: newMark, userId }));

    try {
      await markSnippet({ id: snippetId, mark: newMark }).unwrap();
    } catch (error) {
      console.error(error);
      dispatch(snippetsAction.updateMarkLocal({ snippetId, mark: prevMark, userId }));
    }
  };

  const snippets = useMemo(
    () =>
      snippetsFromSelector.map((snippet) => ({
        ...snippet,
        onLike: () => handleMark(snippet.id, snippet.userMarkType, 'like'),
        onDislike: () => handleMark(snippet.id, snippet.userMarkType, 'dislike'),
        onComment: () => navigate(RoutesPaths.SNIPPET),
      })),
    [snippetsFromSelector, markSnippet, dispatch, userId],
  );

  return {
    snippets,
    isLoading,
    isError,
  };
};
