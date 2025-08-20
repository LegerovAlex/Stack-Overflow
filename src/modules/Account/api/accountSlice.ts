import type { User } from '@/interfaces/api.interfaces';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AccountState {
  account: User | null;
}

const initialState: AccountState = {
  account: null,
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
  },
});

export const accountReducer = accountSlice.reducer;
export const accountAction = accountSlice.actions;
