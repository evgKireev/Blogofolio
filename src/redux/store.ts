import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './home/categoriesSlice';
import menuSlice from './home/menuSlice';
import inputSlice from './home/inputSlice';
import controlsSlice from './home/controlsSlice';

export const store = configureStore({
  reducer: {
    categoriesSlice,
    controlsSlice,
    menuSlice,
    inputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
