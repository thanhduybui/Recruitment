import authReducer from "./auth.ts";
import sidebarReducer from "./sidebar.ts";
import modalReducer from "./modal.ts";
import roleReducer from "./role.ts";
import userFilterTabReducer from "./userFilterTab.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    modals: modalReducer,
    role: roleReducer,
    userFilterTab: userFilterTabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
