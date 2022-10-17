import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlise = createSlice({
  name: 'categories',
  initialState: {
    valueCategoria: 0,
  },
  reducers: {
    setCategories: (state, actions) => {
      state.valueCategoria = actions.payload;
    },
  },
});

export const { setCategories } = categoriesSlise.actions;

export default categoriesSlise.reducer;
