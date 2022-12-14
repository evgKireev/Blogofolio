export type CardsType = {
  id: number;
  image: string;
  text: string;
  date?: string;
  title: string;
  lesson_num: number;
  author?: number;
};

export type CardListType = Array<CardsType>;

export type SetLikeStatusPayload = {
  card: CardsType;
  likeStatus: LikeStatus;
};

export enum LikeStatus {
  Like = 'like',
  DisLike = 'dislike',
}

export type GetBlogsPayload = {
  offset: number;
  search: string;
  ordering: string;
};

export interface IDataForm {
  formData: any;
  callback: () => void;
}

export interface IEditDAtaForm extends IDataForm {
  id: string;
}

export interface IDeleteDataForm extends Omit<IEditDAtaForm, 'formData'> {}
