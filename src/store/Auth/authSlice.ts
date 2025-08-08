import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserResponse } from './auth.interface';

interface AuthState {
  user: UserResponse | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
