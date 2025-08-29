import type { SnippetCardProps } from '@/components';
import type { SnippetFormValue } from '@/interfaces/api.interfaces';
import type { MarkType } from '@/types/snippets.types';
import type { RefCallback } from 'react';

export interface SnippetListProps {
  items: SnippetCardProps[];
  lastElementRef?: RefCallback<HTMLElement>;
  onMark: (id: string, currentMark: MarkType, type: 'like' | 'dislike') => void;
  onComment: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, data: SnippetFormValue) => void;
}
