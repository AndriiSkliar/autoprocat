import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAutos = createAsyncThunk(
  'autos/get',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://65e78c0853d564627a8efd6f.mockapi.io/adverts?page=${page}&limit=12`
      );
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
