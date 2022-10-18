import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputSearch: '',
    inputUser: '',
  },
  reducers: {
    setInputSearch: (state, actions: PayloadAction<string>) => {
      state.inputSearch = actions.payload;
    },

    setInputUser: (state, actions: PayloadAction<string>) => {
      state.inputUser = actions.payload;
    },
  },
});

export const { setInputSearch, setInputUser } = inputSlice.actions;
export default inputSlice.reducer;
