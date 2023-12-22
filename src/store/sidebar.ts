import { createSlice } from "@reduxjs/toolkit";
import { TabIndex } from "@data/constants";

interface SidebarState {
  tabIndex: number;
}

const initialState: SidebarState = {
  tabIndex: TabIndex.HOME,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    setTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
  },
});

export const { setTabIndex } = sidebarSlice.actions;

export default sidebarSlice.reducer;
