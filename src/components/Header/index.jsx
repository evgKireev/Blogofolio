import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setValueMenu } from '../../redux/home/menuSlice';
import Menu from '../Menu';
function Header() {
  const dispath = useDispatch();
  const valueMenu = useSelector((state) => state.menuSlice.valueMenu);
  return (
    <header className={styles.inner}>
      <button
        onClick={() => dispath(setValueMenu(!valueMenu))}
        className={styles.inner__menu}
        type="submit"
      >
        {valueMenu ? (
          <AiOutlineClose  />
        ) : (
          <AiOutlineMenu />
        )}
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
      <Menu />
    </header>
  );
}

export default Header;
