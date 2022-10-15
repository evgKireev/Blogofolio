import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs';
import styles from './ControlNews.module.scss';
function ControlNews() {
  return (
    <div className={styles.control}>
      <div>
        <button className={styles.control__btn} type="submit">
          <AiOutlineLike />
        </button>
        <span>20</span>
        <button className={styles.control__btn} type="submit">
          <AiOutlineDislike />
        </button>
        <span className={styles.control__span}>0</span>
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
