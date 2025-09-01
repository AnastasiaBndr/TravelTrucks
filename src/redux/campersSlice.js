import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers,fetchById } from "./campersOps";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    card:{},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchById.pending, handlePending)
      .addCase(fetchById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.card = action.payload;
      })
      .addCase(fetchById.rejected, handleRejected);;
  },
});

export default slice.reducer;
