import type { User } from '@/interfaces/api.interfaces';
import type { RefCallback } from 'react';

export interface UsersListProps {
  users: User[];
  lastElementRef?: RefCallback<HTMLElement>;
}
