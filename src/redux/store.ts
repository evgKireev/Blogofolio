import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './home/categoriesSlice';
import likeSlece from './home/likeSlece';
import menuSlice from './home/menuSlice';
import inputSlice from './home/inputSlice';

export const store = configureStore({
  reducer: {
    categoriesSlice,
    likeSlece,
    menuSlice,
    inputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
