import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs';
import styles from './ControlNews.module.scss';
import classNames from 'classnames';
import DropdawnList from '../DropdawnList';

import {
  setLikeDecrement,
  setLikeIncrement,
  setDropdawn,
} from '../../redux/home/controlsSlice';

const ControlNews: React.FC = () => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const valueLikeInc = useAppSelector(
    (state) => state.controlsSlice.likeIncrement
  );
  const valueLikeDec = useAppSelector(
    (state) => state.controlsSlice.likeDecrement
  );
  const valueDropdawn = useAppSelector((state) => state.controlsSlice.dropdawn);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.control}>
      <div>
        <button
          onClick={() => dispatch(setLikeIncrement(valueLikeInc + 1))}
          className={styles.btn}
          type="submit"
        >
          <AiOutlineLike
            className={classNames(styles.btn, {
              [styles.bodyMon]: valueOnMon,
            })}
          />
        </button>
        <span className={styles.span}>{valueLikeInc}</span>
        <button
          onClick={() => dispatch(setLikeDecrement(valueLikeDec + 1))}
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
        <span className={styles.span}>{valueLikeDec}</span>
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
        <button
          className={styles.btn}
          type="submit"
        >
          <BsThreeDots
            className={classNames(styles.btn, {
              [styles.bodyMon]: valueOnMon,
            })}
          />
        </button>
      </div>
      <DropdawnList valueDropdawn={valueDropdawn} />
    </div>
  );
};

export default ControlNews;
