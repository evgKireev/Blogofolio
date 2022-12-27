import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageListType, ImageType } from 'react-images-uploading';
import { IDataForm, IDeleteDataForm, IEditDAtaForm } from '../../@types/cards';

type inputSliceType = {
  inputSearch: string;
  valueInput: string;
  inputUser: string;
  images: ImageListType;
  inputFormTitle: string;
  inputFormText: string;
  inputLessonNum: string;
  statusAddPost: string;
};

const initialState: inputSliceType = {
  inputSearch: '',
  valueInput: '',
  inputUser: '',
  images: [],
  inputFormTitle: '',
  inputFormText: '',
  inputLessonNum: '',
  statusAddPost: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,

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

    setSetImages: (state, actions: PayloadAction<ImageType[]>) => {
      state.images = actions.payload;
    },
    setInputFormTitle: (state, actions: PayloadAction<string>) => {
      state.inputFormTitle = actions.payload;
    },
    setInputFormText: (state, actions: PayloadAction<string>) => {
      state.inputFormText = actions.payload;
    },
    setInputLessonNum: (state, actions: PayloadAction<string>) => {
      state.inputLessonNum = actions.payload;
    },
    getFormData: (state, actions: PayloadAction<IDataForm>) => {},
    editFormData: (state, actions: PayloadAction<IEditDAtaForm>) => {},
    deleteFormData: (state, actions: PayloadAction<IDeleteDataForm>) => {},
    setstatusAddPost: (state, actions: PayloadAction<string>) => {
      state.statusAddPost = actions.payload;
    },
  },
});

export const {
  setInputSearch,
  setInputUser,
  setSetImages,
  setValueInput,
  setInputFormTitle,
  setInputFormText,
  setInputLessonNum,
  getFormData,
  setstatusAddPost,
  editFormData,
  deleteFormData
} = inputSlice.actions;
export default inputSlice.reducer;
