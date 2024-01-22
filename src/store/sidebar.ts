import { createSlice } from "@reduxjs/toolkit";
import {
  Roles,
  TabIndex,
  adminTabIndex,
  recruiterTabIndex,
} from "@data/constants";
import { getUserRole } from "@utils/authUtils";

interface SidebarState {
  tabIndex: number;
}

const getInitialState = (): SidebarState => {
  const role = getUserRole();
  console.log(role);
  if (role === Roles.ADMIN) {
    return { tabIndex: adminTabIndex.ADMIN_SALARY };
  } else if (role === Roles.CANDIDATE) {
    return { tabIndex: TabIndex.USER_PROFILE };
  } else if (role === Roles.RECRUITER) {
    return { tabIndex: recruiterTabIndex.RECRUITER_PROFILE };
  }
  return { tabIndex: TabIndex.USER_PROFILE };
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: getInitialState(),
  reducers: {
    setTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
  },
});

export const { setTabIndex } = sidebarSlice.actions;

export default sidebarSlice.reducer;
