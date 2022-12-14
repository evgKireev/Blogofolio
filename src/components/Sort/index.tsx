import { useState, useRef, useEffect } from 'react';
import styles from './Sort.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSortValue } from '../../redux/home/categoriesSlice';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
const Sort = () => {
  const sortRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { sortValue } = useAppSelector((state) => state.categoriesSlice);
  const dispatch = useAppDispatch();

  const sortName: {
    sort: string;
  }[] = [
    { sort: 'data' },
    { sort: 'title' },
    { sort: 'author' },
    { sort: 'lesson num' },
  ];

  useEffect(() => {
    const eventSort = (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        path: null[];
      };
      if (!_e.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', eventSort);
    return () => {
      document.body.removeEventListener('click', eventSort);
    };
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.label}>
        {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        <b>Sort by:</b>
        <span onClick={() => setOpen(!open)}>
          {!sortValue ? 'Choose' : sortValue}
        </span>
      </div>
      {open && (
        <div className={styles.popup}>
          <ul className={styles.list}>
            {sortName.map((value, index) => (
              <li
                onClick={() => {
                  dispatch(setSortValue(value.sort));
                  setOpen(false);
                }}
                key={index}
                className={sortValue === value.sort ? styles.active : ''}
              >
                {value.sort}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
