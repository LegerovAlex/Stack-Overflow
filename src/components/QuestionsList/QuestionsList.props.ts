import type { QuestionFormValue } from '@/interfaces/api.interfaces';
import type { QuestionCardProps } from '../QuestionCard';

export interface QuestionsListProps {
  items: QuestionCardProps[];
  lastElementRef?: (node: HTMLDivElement | null) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, data: QuestionFormValue) => void;
}
