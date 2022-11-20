import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs';
import styles from './ControlNews.module.scss';
import classNames from 'classnames';
import DropdawnList from '../DropdawnList';
import {
  setbookmarkPosts,
  setlikedStatus,
} from '../../redux/home/controlsSlice';
import { CardsType, LikeStatus } from '../../@types/cards';

type controlNews = {
  card: CardsType;
  onClickDrop: () => void;
};

const ControlNews: React.FC<controlNews> = ({ card, onClickDrop }) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const valueDropdawn = useAppSelector((state) => state.controlsSlice.dropdawn);
  const disLikePost = useAppSelector(
    (state) => state.controlsSlice.disLikedPosts
  );
  const likePost = useAppSelector((state) => state.controlsSlice.likedPosts);
  const bookMark = useAppSelector((state) => state.controlsSlice.bookmarkPosts);
  const dispatch = useAppDispatch();

  const isLikeCount = likePost.findIndex((post) => post.id === card.id) > -1;
  const isDisLikeCount =
    disLikePost.findIndex((post) => post.id === card.id) > -1;
  const isBookmark = bookMark.findIndex((post) => post.id === card.id) > -1;

  const onStatusClick = (likeStatus: LikeStatus) => {
    dispatch(setlikedStatus({ card, likeStatus }));
  };

  return (
    <div className={styles.control}>
      <div>
        <button
          onClick={() => {
            onStatusClick(LikeStatus.Like);
          }}
          className={styles.btn}
          type="submit"
        >
          <AiOutlineLike
            className={classNames(styles.btn, {
              [styles.bodyMon]: valueOnMon,
            })}
          />
        </button>
        <span className={styles.span}>{isLikeCount && 1}</span>
        <button
          onClick={() => {
            onStatusClick(LikeStatus.DisLike);
          }}
          className={classNames(styles.btn, {
            [styles.bodyMon]: valueOnMon,
          })}
          type="submit"
        >
          <AiOutlineDislike
            className={classNames(styles.btn, {
              [styles.bodyMon]: valueOnMon,
            })}
          />
        </button>
        <span className={styles.span}>{isDisLikeCount && 1}</span>
      </div>
      <div>
        <button
          className={styles.btn}
          type="submit"
          onClick={() => {
            dispatch(setbookmarkPosts(card));
          }}
        >
          {isBookmark ? (
            <BsBookmarkFill className={styles.btnOnBook} />
          ) : (
            <BsBookmark
              className={classNames(styles.btn, {
                [styles.bodyMon]: valueOnMon,
              })}
            />
          )}
        </button>

        <button className={styles.btn} type="submit">
          <BsThreeDots
            onClick={onClickDrop}
            className={classNames(styles.btn, {
              [styles.bodyMon]: valueOnMon,
            })}
          />
        </button>
      </div>
      {/* <DropdawnList  /> */}
    </div>
  );
};

export default ControlNews;
