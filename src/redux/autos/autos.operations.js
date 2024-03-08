import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const instance = axios.create({
  baseURL: 'https://65e78c0853d564627a8efd6f.mockapi.io/',
});

const toastOptions = { position: 'top-center', autoClose: 2000 };

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

      if (data.length > 0) {
        toast.success('successfully uploaded', toastOptions);
      }

      if (data.length === 0) {
        toast.warning(
          'Unfortunately, no other offers were found',
          toastOptions
        );
      }
      return data;
    } catch (err) {
      toast.error(
        'Oops... Something went wrong =(. Please, reload page and try again',
        toastOptions
      );

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
    } catch (error) {
      return rejectWithValue(error.message);
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
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
