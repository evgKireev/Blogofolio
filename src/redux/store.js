import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './home/categoriesSlice';
import likeSlece from './home/likeSlece';
import menuSlice from './home/menuSlice';

export default configureStore({
  reducer: {
    categoriesSlice,
    likeSlece,
    menuSlice
  },
});
