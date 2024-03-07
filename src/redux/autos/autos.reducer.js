import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchBaseAutos,
  fetchAutos,
  fetchAutosBrands,
} from './autos.operations';

const initialState = {
  autos: [],
  favorites: [],
  autosBrands: [],
  isLoaded: false,
  page: 1,
  isLoading: false,
  error: null,
};

const autosSlice = createSlice({
  name: 'autos',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchBaseAutos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.autos.push(...payload);
      })
      .addCase(fetchAutos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.page += 1;
        state.autos.push(...payload);
      })
      .addCase(fetchAutosBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.autosBrands = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchBaseAutos.pending,
          fetchAutos.pending,
          fetchAutosBrands.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchBaseAutos.rejected,
          fetchAutos.rejected,
          fetchAutosBrands.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
export const autosReducer = autosSlice.reducer;
