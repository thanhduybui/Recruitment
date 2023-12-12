import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isFirstTime: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isFirstTime: false,
  isAuthenticated: false,
};

const loginSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = loginSlide.actions;

export default loginSlide.reducer;
