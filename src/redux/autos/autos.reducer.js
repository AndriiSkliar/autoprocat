import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAutos,
  fetchAutosBrands,
  fetchSelectedAutos,
} from './autos.operations';

const initialState = {
  autos: [],
  favorites: [],
  autosBrands: [],
  page: 1,
  isLoading: false,
  error: null,
  searchResult: [],
};

const autosSlice = createSlice({
  name: 'autos',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    decrementPage(state) {
      state.page = 1;
    },
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((auto) => auto.id !== payload);
    },
  },
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
      .addCase(fetchSelectedAutos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searchResult = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchAutos.pending,
          fetchAutosBrands.pending,
          fetchSelectedAutos.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAutos.rejected,
          fetchAutosBrands.rejected,
          fetchSelectedAutos.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
export const autosReducer = autosSlice.reducer;

export const {
  incrementPage,
  decrementPage,
  addToFavorites,
  removeFromFavorites,
} = autosSlice.actions;
