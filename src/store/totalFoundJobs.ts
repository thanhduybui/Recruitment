import { createSlice } from "@reduxjs/toolkit";

interface totalFoundJobsState {
  total: number;
}

const initialState: totalFoundJobsState = {
  total: 0,
};

const totalFoundJobsSlice = createSlice({
  name: "totalFoundJobs",
  initialState: initialState,
  reducers: {
    setTotalFoundJobs(state, action) {
      state.total = action.payload;
    },
  },
});

export const { setTotalFoundJobs } = totalFoundJobsSlice.actions;

export default totalFoundJobsSlice.reducer;
