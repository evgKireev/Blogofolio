import { createSlice } from '@reduxjs/toolkit';

export type cardType = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export type cardsSliceType = {
  cards: cardType[];
};

const initialState: cardsSliceType = {
  cards: [],
};

export const cardsSlise = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, actions) => {
      state.cards = actions.payload;
    },
  },
});

export const { setCards } = cardsSlise.actions;

export default cardsSlise.reducer;
