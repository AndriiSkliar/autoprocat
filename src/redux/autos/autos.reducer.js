import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos } from './autos.operations';

const initialState = {
  autos: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const autosSlice = createSlice({
  name: 'autos',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAutos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAutos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.autos.push(...payload);
      })
      .addCase(fetchAutos.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const autosReducer = autosSlice.reducer;
