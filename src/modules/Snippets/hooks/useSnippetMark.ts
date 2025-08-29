import type { MarkType } from '@/types/snippets.types';
import { useDispatch } from 'react-redux';
import { snippetsAction } from '../api/snippetsSlice';
import { useMarkSnippetMutation } from '../api/snippets.api';
import { useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const useSnippetMark = () => {
  const dispatch = useDispatch();
  const [markSnippet] = useMarkSnippetMutation();
  const { account } = useAuth();

  const userId = account?.id;

  const handleMark = useCallback(
    async (snippetId: string, currentType: MarkType | undefined, nextType: 'like' | 'dislike') => {
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
    },
    [markSnippet, userId],
  );

  return { handleMark };
};
