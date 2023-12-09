import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  tabIndex: number;
}

const initialState: SidebarState = {
  tabIndex: 0,
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
