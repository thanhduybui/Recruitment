import authReducer from "./auth.ts";
import sidebarReducer from "./sidebar.ts";
import applyModalReducer from "./applyJob.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    applyModal: applyModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
