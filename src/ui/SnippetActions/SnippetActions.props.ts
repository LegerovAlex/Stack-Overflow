import type { MarkType } from '@/types/snippets.types';

export interface SnippetActionsProps {
  id: string;
  likes: number;
  dislikes: number;
  comments: number;
  userMarkType?: MarkType;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  onComment: (id: string) => void;
}
