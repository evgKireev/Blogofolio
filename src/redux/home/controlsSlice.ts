import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardsType } from '../../@types/cards';
import { oneNewType } from '../../components/OneNews';
import cardsData from '../../data/cards';

type ControlNewsType = {
  dropdawn: CardsType | null;
  cardsData: CardsType[];
  modalImg: string;
  isOpenModal: boolean;
  isOpenModalImg: boolean;
};

const initialState: ControlNewsType = {
  dropdawn: null,
  cardsData,
  modalImg: '',
  isOpenModal: false,
  isOpenModalImg: false,
};

const controlSlice = createSlice({
  name: 'controlNews',
  initialState,
  reducers: {
    // setLike: (state, actions) => {
    //   const cardsDataFind = state.cardsData.find(
    //     (el) => el.id === actions.payload.id
    //   );
    //   if (cardsDataFind) {
    //     cardsDataFind.like++;
    //     // state.cardsData[cardsDataFind.id].like = cardsDataFind.like;
    //   }
    // },
    // setDisLike: (state, actions) => {
    //   const cardsDataFind = state.cardsData.find(
    //     (el) => el.id === actions.payload.id
    //   );
    //   if (cardsDataFind) {
    //     cardsDataFind.disLike++;
    //     // state.cardsData[cardsDataFind.id].like = cardsDataFind.like;
    //   }
    // },
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
  },
});

export const { setDropdawn, setModalImg, setIsOpenModal, setIsOpenModalImg } =
  controlSlice.actions;

export default controlSlice.reducer;
