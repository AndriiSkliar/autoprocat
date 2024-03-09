import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  showSuccessToast,
  showWarningToast,
} from '../../components/ErrorMessages/errorMessages';

const instance = axios.create({
  baseURL: 'https://65e78c0853d564627a8efd6f.mockapi.io/',
});

export const fetchAutos = createAsyncThunk(
  'autos/get',
  async (currentPage, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('adverts', {
        params: {
          page: currentPage,
          limit: 12,
        },
      });

      if (data.length === 0) {
        throw new Error('Data not found');
      }

      showSuccessToast('Data successfully loaded');
      return data;
    } catch (err) {
      showWarningToast('No more information');
      return rejectWithValue(err.message);
    }
  }
);

export const fetchAutosBrands = createAsyncThunk(
  'filters/autosBrands',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('brands');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchSelectedAutos = createAsyncThunk(
  'selectedAutos/fetchAutos',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('adverts', {
        params: {
          limit: 12,
          ...params,
        },
      });

      if (data.length === 0) {
        throw new Error('Data not found');
      }

      showSuccessToast('Data successfully loaded');
      return data;
    } catch (err) {
      showWarningToast('No more information');
      return rejectWithValue(err.response.status);
    }
  }
);
