import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CardsType,
  LikeStatus,
  SetLikeStatusPayload,
} from '../../@types/cards';

type ControlNewsType = {
  dropdawn: CardsType | null;
  modalImg: string;
  isOpenModal: boolean;
  isOpenModalImg: boolean;
  likedPosts: CardsType[];
  disLikedPosts: CardsType[];
  bookmarkPosts: CardsType[];
};

const initialState: ControlNewsType = {
  dropdawn: null,
  modalImg: '',
  isOpenModal: false,
  isOpenModalImg: false,
  likedPosts: [],
  disLikedPosts: [],
  bookmarkPosts: [],
};

const controlSlice = createSlice({
  name: 'controlNews',
  initialState,
  reducers: {
    setDropdawn: (state, actions: PayloadAction<CardsType | null>) => {
      state.dropdawn = actions.payload;
      state.isOpenModal = true;
    },
    setModalImg: (state, actions: PayloadAction<string>) => {
      state.modalImg = actions.payload;
      state.isOpenModalImg = true;
    },
    setIsOpenModal: (state, actions: PayloadAction<boolean>) => {
      state.isOpenModal = actions.payload;
    },
    setIsOpenModalImg: (state, actions: PayloadAction<boolean>) => {
      state.isOpenModalImg = actions.payload;
    },
    setlikedStatus: (state, actions: PayloadAction<SetLikeStatusPayload>) => {
      const { card, likeStatus } = actions.payload;
      const isDisLikeIndex = state.disLikedPosts.findIndex(
        (post) => post.id === card.id
      );
      const isLikeIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );

      if (likeStatus === LikeStatus.Like) {
        if (isLikeIndex === -1) {
          state.likedPosts.push(card);
        } else {
          state.likedPosts.splice(isLikeIndex, 1);
        }
        if (isDisLikeIndex > -1) {
          state.disLikedPosts.splice(isDisLikeIndex, 1);
        }
      } else {
        if (isDisLikeIndex === -1) {
          state.disLikedPosts.push(card);
        } else {
          state.disLikedPosts.splice(isDisLikeIndex, 1);
        }
        if (isLikeIndex > -1) {
          state.likedPosts.splice(isLikeIndex, 1);
        }
      }
    },
    setbookmarkPosts: (state, actions: PayloadAction<CardsType>) => {
      const card = actions.payload;
      const bookmarkIndex = state.bookmarkPosts.findIndex(
        (post) => post.id === card.id
      );
      if (bookmarkIndex === -1) {
        state.bookmarkPosts.push(card);
      } else {
        state.bookmarkPosts.splice(bookmarkIndex, 1);
      }
    },
  },
});

export const {
  setDropdawn,
  setModalImg,
  setIsOpenModal,
  setIsOpenModalImg,
  setlikedStatus,
  setbookmarkPosts,
} = controlSlice.actions;

export default controlSlice.reducer;
