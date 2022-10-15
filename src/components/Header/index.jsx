import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import styles from './Header.module.scss';
function Header() {
  return (
    <header className={styles.inner}>
      <button className={styles.inner__menu} type="submit">
        <AiOutlineMenu />
        {/* <AiOutlineClose /> */}
      </button>
      <div className={styles.inner__block}>
        <button className={styles.inner__search} type="submit">
          <BiSearch />
        </button>
        <div className={styles.inner__profailes}>
          <button className={styles.inner__profailes_btn} type="submit">
            AM
          </button>
          <span>Artem Malkin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
