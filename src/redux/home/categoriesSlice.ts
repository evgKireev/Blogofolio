import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const categoriesSlise = createSlice({
  name: 'categories',
  initialState: {
    valueCategoria: 0,
    sortValue: '',
  },
  reducers: {
    setCategories: (state, actions: PayloadAction<number>) => {
      state.valueCategoria = actions.payload;
    },
    setSortValue: (state, actions: PayloadAction<string>) => {
      state.sortValue = actions.payload;
    },
  },
});

export const { setCategories, setSortValue } = categoriesSlise.actions;

export default categoriesSlise.reducer;
