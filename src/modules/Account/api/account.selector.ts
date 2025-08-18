import type { User } from '@/interfaces/api.interfaces';
import type { AppState } from '@/types/store.types';
import { createSelector } from '@reduxjs/toolkit';

const selectAccount = (state: AppState) => state.account.account;

export const selectAccountProps = createSelector([selectAccount], (account): User | null => {
  if (!account) return null;

  return {
    id: account?.id,
    username: account?.username,
    role: account?.role,
  };
});
