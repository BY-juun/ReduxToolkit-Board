import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UtilStateType {
  openModal: boolean;
}

const initialState = {
  openModal: false,
};

export const utilSlice = createSlice({
  name: "utils",
  initialState: initialState,
  reducers: {
    handleModal(state, action: PayloadAction<boolean>) {
      state.openModal = action.payload;
    },
  },
});

export const { handleModal } = utilSlice.actions;

export default utilSlice.reducer;
