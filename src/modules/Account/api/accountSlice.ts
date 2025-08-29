import type { Statistic, User } from '@/interfaces/api.interfaces';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AccountState {
  account: User | null;
  statistic: Statistic | null;
}

const initialState: AccountState = {
  account: null,
  statistic: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<User>) => {
      state.account = action.payload;
    },
    clearAccount: (state) => {
      state.account = null;
    },
    setStatistic: (state, action: PayloadAction<Statistic>) => {
      state.statistic = action.payload;
    },
  },
});

export const accountReducer = accountSlice.reducer;
export const accountAction = accountSlice.actions;
