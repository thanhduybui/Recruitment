import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the type for the state
interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
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

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    auth: loginSlide.reducer,
  },
});
