import { createSlice } from '@reduxjs/toolkit';


const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    valueMenu: false,
  },
  reducers: {
    setValueMenu: (state, actions) => {
      state.valueMenu = actions.payload;
    },
  },
});

export const { setValueMenu } = menuSlice.actions;
export default menuSlice.reducer;
