import type { User } from '@/interfaces/api.interfaces';

export interface ApiAccountResponce {
  data: User;
}

export interface UpdateUsernameRequest {
  username: string;
}

export interface UpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface UpdateAccountResponse {
  data: User;
  message: string;
}
