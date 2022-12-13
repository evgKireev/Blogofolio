import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputSearch: '',
    valueInput: '',
    inputUser: '',
    inputFile: 'Файл не выбран',
  },
  reducers: {
    setInputSearch: (state, actions: PayloadAction<string>) => {
      state.inputSearch = actions.payload;
    },
    setValueInput: (state, actions: PayloadAction<string>) => {
      state.valueInput = actions.payload;
    },

    setInputUser: (state, actions: PayloadAction<string>) => {
      state.inputUser = actions.payload;
    },

    setInputFile: (state, actions: PayloadAction<string>) => {
      state.inputFile = actions.payload;
    },
  },
});

export const { setInputSearch, setInputUser, setInputFile, setValueInput } =
  inputSlice.actions;
export default inputSlice.reducer;
