import authReducer from "./auth.ts";
import sidebarReducer from "./sidebar.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
