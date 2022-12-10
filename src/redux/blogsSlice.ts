import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardListType } from '../@types/cards';

type BlogSliseState = {
  data: CardListType;
  dataMyBlogs: CardListType;
  status: string;
};

const initialState: BlogSliseState = {
  data: [],
  dataMyBlogs: [],
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
    getMyBlogs: (state, actions: PayloadAction<undefined>) => {},
    setMyBlogs: (state, actions: PayloadAction<CardListType>) => {
      state.dataMyBlogs = actions.payload;
    },
  },
});

export const { getBlogs, setBlogs, setIsLoading, getMyBlogs, setMyBlogs } =
  blogsSlice.actions;
export default blogsSlice.reducer;
