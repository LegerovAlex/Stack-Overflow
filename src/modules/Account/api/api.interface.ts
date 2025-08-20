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

export interface StatisticResponse {
  statistic: Statistic;
}
