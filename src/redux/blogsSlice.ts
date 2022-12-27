import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CardListType,
  CardsType,
  GetBlogsPayload,
} from '../@types/cards';

export type BlogSliseState = {
  data: CardListType;
  dataMyBlogs: CardListType;
  status: string;
  poginationSelect: number;
  poginationCount: number;
  blog: CardsType | null;
};

const initialState: BlogSliseState = {
  data: [],
  dataMyBlogs: [],
  status: '',
  poginationSelect: 1,
  poginationCount: 0,
  blog: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    getBlogs: (state, actions: PayloadAction<GetBlogsPayload>) => {},
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
    setPoginationSelect: (state, actions: PayloadAction<number>) => {
      state.poginationSelect = actions.payload;
    },
    setpoginationCount: (state, actions: PayloadAction<number>) => {
      state.poginationCount = actions.payload;
    },
    setBlog: (state, actions: PayloadAction<CardsType>) => {
      state.blog = actions.payload;
    },
  },
});

export const {
  getBlogs,
  setBlogs,
  setIsLoading,
  getMyBlogs,
  setMyBlogs,
  setPoginationSelect,
  setpoginationCount,
  setBlog,
} = blogsSlice.actions;
export default blogsSlice.reducer;
