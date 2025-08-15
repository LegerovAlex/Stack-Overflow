import type { User } from '@/store/Auth/auth.interface';
import type { MarkType } from '@/types/snippets.types';

export interface Mark {
  id: string;
  type: MarkType;
  user: User;
}

export interface MarkSnippetRequest {
  id: string;
  mark: MarkType;
}

export interface AddCommentRequest {
  snippetId: string;
  content: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
}

export interface ApiCommentResponce {
  data: Comment;
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

export interface ApiSnippetsResponse {
  data: SnippetsResponse;
}

export interface ApiSnippetResponce {
  data: Snippet;
}
