export type CardsType = {
  id: number;
  image: string;
  text?: string;
  date?: string;
  title?: string;
  lesson_num?: number;
  author?: number;
  like?: number;
  disLike?: number;
};

export enum LikeStatus {
  Like = 'like',
  DisLike = 'dislike',
}

export type SetLikeStatusPayload = {
  card: CardsType;
  likeStatus: LikeStatus;
};
