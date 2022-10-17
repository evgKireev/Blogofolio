import styles from './Menu.module.scss';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
import { useSelector } from 'react-redux';
function Menu() {
  const valueMenu = useSelector((state) => state.menuSlice.valueMenu);
  return (
    <div className={valueMenu ? styles.activeBlock : styles.inner}>
      <div className={styles.inner__profailes}>
        <button className={styles.inner__profailes_btn} type="submit">
          AM
        </button>
        <span>Artem Malkin</span>
      </div>
      <div className={styles.inner__menu}>
        <ul>
          <li className={styles.inner__menu__item}>Home</li>
          <li className={styles.inner__menu__item}>Add post</li>
        </ul>
        <div className={styles.inner__wrapper}>
          <div className={styles.inner__img}>
            <div className={styles.inner__img__inner}>
              <BsSun className={styles.inner__sun} />
            </div>
            <div className={styles.inner__img__inner}>
              <BiMoon className={styles.inner__moon} />
            </div>
          </div>
          <p className={styles.inner__log}> Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
