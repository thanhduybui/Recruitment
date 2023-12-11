import { createSlice } from "@reduxjs/toolkit";

interface ApplyModalState {
  isOpen: boolean;
}

const initialState: ApplyModalState = {
  isOpen: false,
};

const applyModalSlide = createSlice({
  name: "applyModal",
  initialState,
  reducers: {
    close: (state) => {
      state.isOpen = false;
    },
    open: (state) => {
      state.isOpen = true;
    },
  },
});

export const { open, close } = applyModalSlide.actions;

export default applyModalSlide.reducer;
