import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CardsType } from '../@types/cards';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogStatus',
  async () => {
    const { data } = await axios.get(
      `https://studapi.teachmeskills.by/blog/posts/?limit=11`
    );
    return data.results as CardsType[];
  }
);

type BlogSliseState = {
  data: CardsType[];
  status: string;
};

const initialState: BlogSliseState = {
  data: [],
  status: 'pending',
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, actions) => {
      state.data = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.status = 'pending';
      state.data = [];
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchBlogs.rejected, (state) => {
      state.status = 'rejected';
      state.data = [];
    });
  },
});
export const { setBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
