import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "@utils/authUtils";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: getAccessToken() ? true : false,
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
