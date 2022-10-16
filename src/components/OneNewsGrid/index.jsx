import ControlNews from '../ControlNews';
import styles from './OneNewsGrid.module.scss';
import images from '../../assets/img/Rectangle39.png';
function OneNewsGrid() {
  return (
    <div className={styles.oneNews}>
      <div className={styles.oneNews__wrapper}>
        <div>
          <img className={styles.oneNews__img} src={images} alt="" />
        </div>
        <span className={styles.oneNews__subTitle}>April 20, 2021</span>
        <h2 className={styles.oneNews__title}>
          Astronauts prep for new solar arrays on nearly seven-hour spacewalk
        </h2>
      </div>
      <ControlNews />
    </div>
  );
}

export default OneNewsGrid;
