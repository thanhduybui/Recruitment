import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalsState {
  [key: string]: boolean;
}

interface ModalPayload {
  modalName: string;
}

const initialState: ModalsState = {
  avatarModal: false,
  applyModal: false,
  addUserModal: false,
  userDetailModal: false,
  jobDetailModal: false,
  informModal: false,
  deleteModal: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalPayload>) => {
      const { modalName } = action.payload;
      if (modalName in state) {
        state[modalName] = true;
      }
    },
    closeModal: (state, action: PayloadAction<ModalPayload>) => {
      const { modalName } = action.payload;
      if (modalName in state) {
        state[modalName] = false;
      }
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;
export default modalsSlice.reducer;
