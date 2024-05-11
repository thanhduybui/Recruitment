import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CVState {
  cvIdToDelete: number | null; // Lưu ID của CV cần xóa, hoặc null nếu không có CV nào cần xóa
}

const initialState: CVState = {
  cvIdToDelete: null,
};

const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setCVIdToDelete: (state, action: PayloadAction<number>) => {
      state.cvIdToDelete = action.payload;
    },
    clearCVIdToDelete: (state) => {
      state.cvIdToDelete = null;
    },
  },
});

export const { setCVIdToDelete, clearCVIdToDelete } = cvSlice.actions;
export default cvSlice.reducer;
