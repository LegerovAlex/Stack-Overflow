import type { QuestionFormValue } from '@/interfaces/api.interfaces';

export interface QuestionCardProps {
  id?: string;
  title: string;
  username: string;
  description: string;
  code: string;
  isResolved: boolean;
  isMine: boolean;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, data: QuestionFormValue) => void;
}
