import type { User } from '@/interfaces/api.interfaces';

export interface Answer {
  id: string;
  content: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  attachedCode: string;
  answers: Answer[];
  user: User;
  isResolved: boolean;
}

export type QuestionsResponse = Question[];

export interface QuestionCardData {
  id: string;
  code: string;
  description: string;
  username: string;
  title: string;
  isResolved: boolean;
}

export interface CreateQuestionRequest {
  title: string;
  description: string;
  attachedCode: string;
}

export interface CreatedQuestionResponce {
  id: string;
  title: string;
  description: string;
  attachedCode: string;
  user: User;
}
