import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputSearch: '',
    inputUser: '',
    inputFile: 'Файл не выбран',
  },
  reducers: {
    setInputSearch: (state, actions: PayloadAction<string>) => {
      state.inputSearch = actions.payload;
      state.inputSearch = '';
    },

    setInputUser: (state, actions: PayloadAction<string>) => {
      state.inputUser = actions.payload;
    },

    setInputFile: (state, actions: PayloadAction<string>) => {
      state.inputFile = actions.payload;
    },
  },
});

export const { setInputSearch, setInputUser, setInputFile } = inputSlice.actions;
export default inputSlice.reducer;
