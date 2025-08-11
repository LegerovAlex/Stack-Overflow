import type { User } from '@/store/Auth/auth.interface';

export interface Mark {
  id: string;
  type: 'like' | 'dislike';
  user: User;
}

export interface Comment {
  id: string;
  content: string;
}

export interface Snippet {
  id: string;
  code: string;
  language: string;
  marks: Mark[];
  user: User;
  comments: Comment[];
}

export interface SnippetsResponse {
  data: Snippet[];
}
