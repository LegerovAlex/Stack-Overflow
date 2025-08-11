import type { SnippetActionsProps } from '@/ui';

export interface SnippetCardProps extends SnippetActionsProps {
  username: string;
  language: string;
  code: string;
}
