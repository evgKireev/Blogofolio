import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs';
import styles from './ControlNews.module.scss';

import { setLikeDecrement, setLikeIncrement } from '../../redux/home/likeSlece';

function ControlNews() {
  const valueLikeInc = useSelector((state) => state.likeSlece.likeIncrement);
  const valueLikeDec = useSelector((state) => state.likeSlece.likeDecrement);
  const dispatch = useDispatch();

  return (
    <div className={styles.control}>
      <div>
        <button
          onClick={() => dispatch(setLikeIncrement(valueLikeInc + 1))}
          className={styles.control__btn}
          type="submit"
        >
          <AiOutlineLike />
        </button>
        <span>{valueLikeInc}</span>
        <button
          onClick={() => dispatch(setLikeDecrement(valueLikeDec + 1))}
          className={styles.control__btn}
          type="submit"
        >
          <AiOutlineDislike />
        </button>
        <span className={styles.control__span}>{valueLikeDec}</span>
      </div>
      <div>
        <button className={styles.control__btn} type="submit">
          <BsBookmark />
        </button>
        {/* <BsBookmarkFill />  */}
        <button className={styles.control__btn} type="submit">
          <BsThreeDots className={styles.control__btn} />
        </button>
      </div>
    </div>
  );
}

export default ControlNews;
