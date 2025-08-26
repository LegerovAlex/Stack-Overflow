import type { QuestionCardProps } from '../QuestionCard';

export interface QuestionsListProps {
  items: QuestionCardProps[];
  lastElementRef?: (node: HTMLDivElement | null) => void;
}
