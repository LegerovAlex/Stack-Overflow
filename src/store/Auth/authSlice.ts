import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    clearAuthenticated: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authAction = authSlice.actions;
