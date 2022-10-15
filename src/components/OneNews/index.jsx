import styles from './OneNews.module.scss';
import images from '..//../assets/img/Rectangle39.png';
import ControlNews from '../ControlNews';

function OneNews() {
  return (
    <div className={styles.oneNews}>
      <div className={styles.oneNews__wrapper}>
        <div className={styles.oneNews__inner}>
          <span className={styles.oneNews__subTitle}>April 20, 2021</span>
          <h2 className={styles.oneNews__title}>
            Astronauts prep for new solar arrays on nearly seven-hour spacewalk
            ...
          </h2>
          <p className={styles.oneNews__text}>
            Astronauts Kayla Barron and Raja Chari floated out of the
            International Space Station airlock for a spacewalk Tuesday,
            installing brackets and struts to support new solar arrays to
            upgrade the research lab’s power system on the same day that
            crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record
            for a single spaceflight.
          </p>
        </div>
        <div>
          <img src={images} alt="" />
        </div>
      </div>
      <ControlNews />
    </div>
  );
}

export default OneNews;
