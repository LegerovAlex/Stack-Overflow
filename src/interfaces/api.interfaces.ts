export interface User {
  id: string;
  username: string;
  role: 'user' | 'admin';
}

export interface Statistic {
  snippetsCount: number;
  rating: number;
  commentsCount: number;
  likesCount: number;
  dislikesCount: number;
  questionsCount: number;
  correctAnswersCount: number;
  regularAnswersCount: number;
}

export interface PaginationMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export interface QuestionFormValue {
  title: string;
  description: string;
  attachedCode: string;
}

export interface SnippetFormValue {
  language: string;
  code: string;
}

export interface SnippetFormValue {
  language: string;
  code: string;
}
