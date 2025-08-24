import type { Statistic } from '@/interfaces/api.interfaces';

export interface StatisticResponse {
  id: string;
  username: string;
  role: string;
  statistic: Statistic;
}
