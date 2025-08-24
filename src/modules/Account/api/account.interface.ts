import type { Statistic, User } from '@/interfaces/api.interfaces';

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

export interface StatisticResponse {
  statistic: Statistic;
}
