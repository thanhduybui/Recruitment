import authReducer from "./auth.ts";
import sidebarReducer from "./sidebar.ts";
import modalReducer from "./modal.ts";
import roleReducer from "./role.ts";
import userFilterTabReducer from "./userFilterTab.ts";
import recruiterSidebarReducer from "./recruiterSidebar.ts";
import registerEmailReducer from "./register.ts";
import jobDetailReducer from "./jobDetail.ts";
import changeCompanyAvatarReducer from "./changeCompanyAvatar.ts";
import jobFilterReducer from "./filterOption.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    modals: modalReducer,
    role: roleReducer,
    userFilterTab: userFilterTabReducer,
    recruiterSidebar: recruiterSidebarReducer,
    registerEmail: registerEmailReducer,
    jobDetail: jobDetailReducer,
    changeCompanyAvatar: changeCompanyAvatarReducer,
    jobFilter: jobFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
