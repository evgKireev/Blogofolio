import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    likeIncrement: 0,
    likeDecrement: 0,
    dropdawn: false,
  },
  reducers: {
    setLikeIncrement: (state, actions) => {
      state.likeIncrement = actions.payload;
    },
    setLikeDecrement: (state, actions) => {
      state.likeDecrement = actions.payload;
    },
    setDropdawn: (state, actions) => {
      state.dropdawn = actions.payload;
    },
  },
});

export const { setLikeIncrement, setLikeDecrement, setDropdawn } =
  likeSlice.actions;

export default likeSlice.reducer;
