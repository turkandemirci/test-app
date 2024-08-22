// src/features/user/stores/userSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUserState } from "../types/user.type";

const initialState: IUserState = {
  selectedUserId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUserId: (state, action: PayloadAction<number>) => {
      state.selectedUserId = action.payload;
    },
  },
});

export const { setSelectedUserId } = userSlice.actions;
export default userSlice.reducer;
