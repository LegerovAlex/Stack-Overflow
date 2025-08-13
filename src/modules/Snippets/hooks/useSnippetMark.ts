import type { MarkType } from '@/types/snippets.types';
import type { AppState } from '@/types/store.types';
import { useDispatch, useSelector } from 'react-redux';
import { snippetsAction } from '../api/snippetsSlice';
import { useMarkSnippetMutation } from '../api/snippets.api';

export const useSnippetMark = () => {
  const dispatch = useDispatch();
  const [markSnippet] = useMarkSnippetMutation();
  const userId = useSelector((state: AppState) => state.auth.user?.id);

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

  return { handleMark };
};
