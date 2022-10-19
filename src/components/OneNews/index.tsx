//@ts-ignore
import styles from './OneNews.module.scss';
import images from '..//../assets/img/Rectangle39.png';
import ControlNews from '../ControlNews';
import OneNewsGrid from '../OneNewsGrid';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';
function OneNews() {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  return (
    <div>
      <div className={styles.oneNews}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <span className={styles.subTitle}>April 20, 2021</span>
            <h2
              className={classNames(styles.title, {
                [styles.bodyMon]: valueOnMon,
              })}
            >
              Astronauts prep for new solar arrays on nearly seven-hour
              spacewalk ...
            </h2>
            <p className={styles.text}>
              Astronauts Kayla Barron and Raja Chari floated out of the
              International Space Station airlock for a spacewalk Tuesday,
              installing brackets and struts to support new solar arrays to
              upgrade the research lab’s power system on the same day that
              crewmate Mark Vande Hei marked his 341st day in orbit, a U.S.
              record for a single spaceflight.
            </p>
          </div>
          <div>
            <img src={images} alt="img" />
          </div>
        </div>
        <ControlNews />
      </div>
      <div className={styles.grid}>
        <OneNewsGrid />
        <OneNewsGrid />
        <OneNewsGrid />
        <OneNewsGrid />
      </div>
    </div>
  );
}

export default OneNews;
