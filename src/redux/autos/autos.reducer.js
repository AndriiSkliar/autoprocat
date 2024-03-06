import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  autos: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const autosSlice = createSlice({
  name: 'autos',
  initialState,
  reducers: {
    addAuto(state, { payload }) {
      state.autos.push(payload);
    },
    deleteAuto(state, { payload }) {
      state.autos = state.autos.filter((auto) => auto.id !== payload);
    },
    addFavoriteAuto(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavoriteAuto(state, { payload }) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== payload
      );
    },
  },
});

export const { addAuto, deleteAuto, addFavoriteAuto, deleteFavoriteAuto } =
  autosSlice.actions;
export const autosReducer = autosSlice.reducer;
