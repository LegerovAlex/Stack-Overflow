import type { SnippetFormValue } from '@/interfaces/api.interfaces';
import type { MarkType } from '@/types/snippets.types';

export interface SnippetActionsProps {
  id: string;
  likes: number;
  language: string;
  code: string;
  dislikes: number;
  comments: number;
  userMarkType?: MarkType;
  onMark?: (id: string, currentMark: MarkType, nextMark: 'like' | 'dislike') => void;
  onComment?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, data: SnippetFormValue) => void;
  isMine?: boolean;
}
