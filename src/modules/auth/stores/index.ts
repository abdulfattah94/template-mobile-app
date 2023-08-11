import { createSlice } from '@reduxjs/toolkit';
import initialState from './authInitialState';

const AuthSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    AuthReset: () => ({
      ...initialState,
    }),
  },
});

export const { name, actions, reducer } = AuthSlice;
