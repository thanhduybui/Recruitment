import authReducer from "./auth.ts";
import sidebarReducer from "./sidebar.ts";
import modalReducer from "./modal.ts";
import roleReducer from "./role.ts";
import userFilterTabReducer from "./userFilterTab.ts";
import deleteCvIdReducer from "./deleteCvId.ts";
import registerEmailReducer from "./register.ts";
import jobDetailReducer from "./jobDetail.ts";
import changeCompanyAvatarReducer from "./changeCompanyAvatar.ts";
import jobFilterReducer from "./filterOption.ts";
import paginationDataReducer from "./paginationData.ts";
import userAvatarReducer from "./avatar.ts";
import jobApplicationId from "./selectedJobApplication.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    modals: modalReducer,
    role: roleReducer,
    userFilterTab: userFilterTabReducer,
    registerEmail: registerEmailReducer,
    jobDetail: jobDetailReducer,
    changeCompanyAvatar: changeCompanyAvatarReducer,
    jobFilter: jobFilterReducer,
    paginationData: paginationDataReducer,
    userAvatar: userAvatarReducer,
    deleteCvId: deleteCvIdReducer,
    jobApplicatonId: jobApplicationId,
  },
});

export type RootState = ReturnType<typeof store.getState>;
