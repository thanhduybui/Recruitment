import { createSlice } from "@reduxjs/toolkit";
import { recruiterTabIndex } from "@data/constants";

interface SidebarState {
  recruiterTabIndex: number;
}

const initialState: SidebarState = {
  recruiterTabIndex: recruiterTabIndex.RECRUITER_PROFILE,
};

const sidebarSlice = createSlice({
  name: "recruiterSidebar",
  initialState: initialState,
  reducers: {
    setRecruiterTabIndex(state, action) {
      state.recruiterTabIndex = action.payload;
    },
  },
});

export const { setRecruiterTabIndex } = sidebarSlice.actions;

export default sidebarSlice.reducer;
