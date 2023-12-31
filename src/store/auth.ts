import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken, getUserRole } from "@utils/authUtils";

interface AuthState {
  isAuthenticated: boolean;
  role?: string;
}

const initialState: AuthState = {
  isAuthenticated: getAccessToken() ? true : false,
  role: getUserRole(),
};

const loginSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.role = getUserRole();
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = undefined;
    },
  },
});

export const { login, logout } = loginSlide.actions;

export default loginSlide.reducer;
