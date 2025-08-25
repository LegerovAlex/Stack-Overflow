import type { SnippetCardProps } from '@/components';
import type { MarkType } from '@/types/snippets.types';
import type { RefCallback } from 'react';

export interface SnippetListProps {
  items: SnippetCardProps[];
  lastElementRef?: RefCallback<Node>;
  onLike: (id: string, currentMark: MarkType, type: 'like' | 'dislike') => void;
  onComment: (id: string) => void;
}
