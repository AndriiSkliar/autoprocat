import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAutos = createAsyncThunk('autos/get', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(
      'https://65e78c0853d564627a8efd6f.mockapi.io/adverts'
    );
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
