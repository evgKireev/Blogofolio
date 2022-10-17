import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    likeIncrement: 0,
    likeDecrement: 0
  },
  reducers: {
    setLikeIncrement: (state, actions) => {
      state.likeIncrement = actions.payload;
    },
    setLikeDecrement: (state, actions) => {
      state.likeDecrement = actions.payload;
    },
  },
});

export const { setLikeIncrement, setLikeDecrement } = likeSlice.actions;

export default likeSlice.reducer;
