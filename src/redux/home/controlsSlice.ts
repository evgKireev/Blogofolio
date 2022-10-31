import { createSlice } from '@reduxjs/toolkit';
import cardsData from '../../data/cards';

const controlSlice = createSlice({
  name: 'controlNews',
  initialState: {
    dropdawn: false,
    cardsData,
  },
  reducers: {
    setLike: (state, actions) => {
      const cardsDataFind = state.cardsData.find(
        (el) => el.id === actions.payload.id
      );
      if (cardsDataFind) {
        cardsDataFind.like++;
        // state.cardsData[cardsDataFind.id].like = cardsDataFind.like;
      }
    },
    setDisLike: (state, actions) => {
      const cardsDataFind = state.cardsData.find(
        (el) => el.id === actions.payload.id
      );
      if (cardsDataFind) {
        cardsDataFind.disLike++;
        // state.cardsData[cardsDataFind.id].like = cardsDataFind.like;
      }
    },
    setDropdawn: (state, actions) => {
      state.dropdawn = actions.payload
    },
  },
});

export const { setLike, setDisLike, setDropdawn } = controlSlice.actions;

export default controlSlice.reducer;
