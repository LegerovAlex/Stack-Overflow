import type { Question, QuestionCardData } from './questions.interface';

export const transformQuestions = (questions: Question[]): QuestionCardData[] => {
  return questions.map((question) => ({
    id: question.id,
    code: question.attachedCode,
    username: question.user.username,
    description: question.description,
    title: question.title,
    isResolved: question.isResolved,
  }));
};
