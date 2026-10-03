import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  lastVerification: null,
  revealedApiKey: null,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLastVerification(state, action) {
      state.lastVerification = action.payload;
    },
    setRevealedApiKey(state, action) {
      state.revealedApiKey = action.payload;
    },
    clearRevealedApiKey(state) {
      state.revealedApiKey = null;
    },
  },
});

export const {
  setLoading,
  setLastVerification,
  setRevealedApiKey,
  clearRevealedApiKey,
} = commonSlice.actions;

export default commonSlice.reducer;
