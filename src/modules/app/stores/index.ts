import { createSlice } from '@reduxjs/toolkit';
import initialState from './appInitialState';

const AppTemp = createSlice({
  name: 'appTemp',
  initialState,
  reducers: {
    setStatusDeeplink: (state, action) => ({
      ...state,
      action: action.type,
      isDeeplink: action.payload,
    }),
    setStatusSplashScreen: (state, action) => ({
      ...state,
      action: action.type,
      isShowSplashScreen: action.payload,
    }),
  },
});

export const { name, actions, reducer } = AppTemp;
