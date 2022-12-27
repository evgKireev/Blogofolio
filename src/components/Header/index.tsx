import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiSearch, BiUser } from 'react-icons/bi';
import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { setValueMenu, setValueCloseInput } from '../../redux/home/menuSlice';
import { setInputSearch, setValueInput } from '../../redux/home/inputSlice';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Menu from '../Menu';
import UserControl from '../UserControl';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const valueMenu = useAppSelector((state) => state.menuSlice.valueMenu);
  const valueCloseInput = useAppSelector(
    (state) => state.menuSlice.valueCloseInput
  );
  const registered = useAppSelector((state) => state.signInSlice.registered);
  const { username } = useAppSelector((state) => state.signInSlice);
  const { valueInput } = useAppSelector((state) => state.inputSlice);
  const activeSearch = styles.inner__search__block__active;
  const noneBlockSearc = styles.inner__search__block__input;
  const btnRef = useRef(null);
  const searchRef = useRef(null);
  const btnSearchRef = useRef(null);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const dispath = useAppDispatch();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispath(setInputSearch(str));
    }, 1000),
    []
  );

  useEffect(() => {
    const eventSearch = (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        path: null[];
      };
      if (
        !_e.path.includes(searchRef.current) &&
        !_e.path.includes(btnSearchRef.current)
      ) {
        dispath(setValueCloseInput(false));
      }
    };
    document.body.addEventListener('click', eventSearch);
    return () => {
      document.body.removeEventListener('click', eventSearch);
    };
  }, []);

  return (
    <header className={styles.inner}>
      <button
        ref={btnRef}
        onClick={() => dispath(setValueMenu(!valueMenu))}
        className={styles.inner__menu}
        type="submit"
      >
        {valueMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div ref={searchRef} className={styles.inner__search__block}>
        {/* {valueCloseInput && (
          <AiOutlineClose
            onClick={() => dispath(setValueCloseInput(false))}
            className={styles.inner__search__block__closes}
          />
        )} */}
        <input
          ref={inputRef}
          value={valueInput}
          onChange={(e: any) => {
            dispath(setValueInput(e.target.value));
            updateSearchValue(e.target.value);
          }}
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
          ref={btnSearchRef}
          onClick={() => {
            if (!!inputRef) {
              inputRef.current.focus();
            }
            dispath(setValueCloseInput(!valueCloseInput));
            dispath(setInputSearch(''));
          }}
          className={styles.inner__search}
          type="submit"
        >
          <BiSearch />
        </button>
        {registered && !!username ? (
          <UserControl userName={username} />
        ) : (
          <Link to="signIn">
            <div className={styles.inner__user}>
              <BiUser />
            </div>{' '}
          </Link>
        )}
      </div>
      <Menu btnRef={btnRef} />
    </header>
  );
};

export default Header;
