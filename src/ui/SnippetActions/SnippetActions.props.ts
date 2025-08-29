import type { MarkType } from '@/types/snippets.types';

export interface SnippetActionsProps {
  id: string;
  likes: number;
  dislikes: number;
  comments: number;
  userMarkType?: MarkType;
  onMark?: (id: string, currentMark: MarkType, nextMark: 'like' | 'dislike') => void;
  onComment?: (id: string) => void;
  onDelete?: (id: string) => void;
  isMine?: boolean;
}
