import { createSlice } from '@reduxjs/toolkit';


const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    valueMenu: false,
    valueCloseInput: false
  },
  reducers: {
    setValueMenu: (state, actions) => {
      state.valueMenu = actions.payload;
    },
    setValueCloseInput: (state, actions) => {
      state.valueCloseInput = actions.payload;
    },
  },
});

export const { setValueMenu, setValueCloseInput } = menuSlice.actions;
export default menuSlice.reducer;
