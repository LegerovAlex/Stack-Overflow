import type { UserCardProps } from '@/components';

import type { AppState } from '@/types/store.types';
import { createSelector } from '@reduxjs/toolkit';
import type { AccountStatsProps } from '../components/AccountStats';

const selectAccount = (state: AppState) => state.account.account;

const selectAccountStatistic = (state: AppState) => state.account.statistic;

export const selectAccountProps = createSelector(
  [selectAccount],
  (account): UserCardProps | null => {
    if (!account) return null;

    return {
      id: account.id,
      username: account.username,
      role: account?.role,
    };
  },
);

export const selectAccountStatisitcProps = createSelector(
  [selectAccountStatistic],
  (statistic): AccountStatsProps | null => {
    if (!statistic) return null;

    return {
      snippetsCount: statistic.snippetsCount,
      rating: Math.floor(statistic.snippetsCount),
      commentsCount: statistic.commentsCount,
      likesCount: statistic.likesCount,
      dislikesCount: statistic.dislikesCount,
      questionsCount: statistic.questionsCount,
      correctAnswersCount: statistic.correctAnswersCount,
      regularAnswersCount: statistic.regularAnswersCount,
    };
  },
);
