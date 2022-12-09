import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardListType } from '../@types/cards';

type BlogSliseState = {
  data: CardListType;
  status: string;
};

const initialState: BlogSliseState = {
  data: [],
  status: '',
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    getBlogs: (state, actions: PayloadAction<undefined>) => {},
    setBlogs: (state, actions: PayloadAction<CardListType>) => {
      state.data = actions.payload;
    },
    setIsLoading: (state, actions: PayloadAction<string>) => {
      state.status = actions.payload;
    },
  },
});

export const { getBlogs, setBlogs, setIsLoading } = blogsSlice.actions;
export default blogsSlice.reducer;
