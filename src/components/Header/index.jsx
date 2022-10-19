import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setValueMenu, setValueCloseInput } from '../../redux/home/menuSlice';
import Menu from '../Menu';
import UserControl from '../UserControl';
import { useRef } from 'react';

function Header() {
  const dispath = useDispatch();
  const valueMenu = useSelector((state) => state.menuSlice.valueMenu);
  const valueCloseInput = useSelector(
    (state) => state.menuSlice.valueCloseInput
  );

  const activeSearch = styles.inner__search__block__active;
  const noneBlockSearc = styles.inner__search__block__input;
  return (
    <header className={styles.inner}>
      <button
        onClick={() => dispath(setValueMenu(!valueMenu))}
        className={styles.inner__menu}
        type="submit"
      >
        {valueMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div className={styles.inner__search__block}>
        {valueCloseInput && (
          <AiOutlineClose
            onClick={() => dispath(setValueCloseInput(false))}
            className={styles.inner__search__block__closes}
          />
        )}
        <input
          className={
            valueCloseInput
              ? `${noneBlockSearc} ${activeSearch}`
              : noneBlockSearc
          }
          type="text"
          placeholder="Search..."
        ></input>
      </div>
      <div className={styles.inner__block}>
        <button
          onClick={() => dispath(setValueCloseInput(!valueCloseInput))}
          className={styles.inner__search}
          type="submit"
        >
          <BiSearch />
        </button>
        <UserControl userName="Artem Malkin" onClick={() => console.log(1)} />
      </div>
      <Menu />
    </header>
  );
}

export default Header;
