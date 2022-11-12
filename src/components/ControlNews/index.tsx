import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs';
import styles from './ControlNews.module.scss';
import classNames from 'classnames';
import DropdawnList from '../DropdawnList';

// import {
//   setLike,
//   setDisLike,
//   setDropdawn,
// } from '../../redux/home/controlsSlice';

type controlNews = {
  id: number;
  onClickDrop: () => void;
};

const ControlNews: React.FC<controlNews> = ({ id, onClickDrop }) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const valueDropdawn = useAppSelector((state) => state.controlsSlice.dropdawn);
  const card = useAppSelector((state) =>
    state.controlsSlice.cardsData.find((el) => el.id === id)
  );

  const dispatch = useAppDispatch();

  return (
    <div className={styles.control}>
      <div>
        <button
          // onClick={() => {
          //   dispatch(setLike(card));
          // }}
          className={styles.btn}
          type="submit"
        >
          <AiOutlineLike
            className={classNames(styles.btn, {
              [styles.bodyMon]: valueOnMon,
            })}
          />
        </button>
        <span className={styles.span}>{card?.like}</span>
        <button
          // onClick={() => {
          //   dispatch(setDisLike(card));
          // }}
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
        <span className={styles.span}>{card?.disLike}</span>
      </div>
      <div>
        <button className={styles.btn} type="submit">
          <BsBookmark
            className={classNames(styles.btn, {
              [styles.bodyMon]: valueOnMon,
            })}
          />
        </button>
        {/* <BsBookmarkFill />  */}
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
