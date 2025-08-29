import type { User } from '@/interfaces/api.interfaces';
import type { UsersCardData } from './users.interface';

export const transformUsers = (users: User[]): UsersCardData[] => {
  return users.map((user) => ({
    id: user.id,
    role: user.role,
    username: user.username,
  }));
};
