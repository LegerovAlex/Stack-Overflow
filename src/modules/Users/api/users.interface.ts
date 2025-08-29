import type { PaginationMeta, User } from '@/interfaces/api.interfaces';

export interface UsersApiResponce {
  data: User[];
  meta: PaginationMeta;
}

export interface UsersCardData {
  id: string;
  role: 'user' | 'admin';
  username: string;
}
