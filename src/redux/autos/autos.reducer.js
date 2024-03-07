import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAutos, fetchAutosBrands } from './autos.operations';

const initialState = {
  autos: [],
  favorites: [],
  autosBrands: [],
  isLoading: false,
  error: null,
};

const autosSlice = createSlice({
  name: 'autos',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAutos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.autos.push(...payload);
      })
      .addCase(fetchAutosBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.autosBrands = payload;
      })
      .addMatcher(
        isAnyOf(fetchAutos.pending, fetchAutosBrands.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchAutos.rejected, fetchAutosBrands.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
export const autosReducer = autosSlice.reducer;
