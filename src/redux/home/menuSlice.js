import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    valueMenu: false,
    valueCloseInput: false,
    valueOnMon: false,
  },
  reducers: {
    setValueMenu: (state, actions) => {
      state.valueMenu = actions.payload;
    },
    setValueCloseInput: (state, actions) => {
      state.valueCloseInput = actions.payload;
    },
    setValueOnMon: (state, actions) => {
      state.valueOnMon = actions.payload;
    },
  },
});

export const { setValueMenu, setValueCloseInput,setValueOnMon } = menuSlice.actions;
export default menuSlice.reducer;
