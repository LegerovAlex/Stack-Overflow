import type { MarkType } from '@/types/snippets.types';

export interface SnippetCardProps {
  id: string;
  likes: number;
  dislikes: number;
  comments: number;
  userMarkType?: MarkType;
  username: string;
  language: string;
  code: string;
  onLike?: (id: string, currentMark: MarkType, type: 'like' | 'dislike') => void;
  onComment?: (id: string) => void;
  onDelete?: (id: string) => void;
  isMine?: boolean;
}
