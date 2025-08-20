import type { AccountStatsProps } from '@/modules/Account/components/AccountStats';
import type { ParseKeys } from 'i18next';

export type StatsItem = ReadonlyArray<{
  readonly id: string;
  readonly field: keyof AccountStatsProps;
  readonly label: ParseKeys;
}>;
