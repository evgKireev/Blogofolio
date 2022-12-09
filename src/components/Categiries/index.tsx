import React, { useMemo } from 'react';
import styles from './Categories.module.scss';
import { setCategories } from '../../redux/home/categoriesSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import classNames from 'classnames';

const Categories: React.FC = () => {
  const { valueOnMon } = useAppSelector((state) => state.menuSlice);
  const { registered } = useAppSelector((state) => state.signInSlice);
  const valueCategories = useAppSelector(
    (state) => state.categoriesSlice.valueCategoria
  );
  const dispatch = useAppDispatch();
  const categoties: string[] = useMemo(
    () => [
      'All',
      registered ? 'My favorites' : '',
      'Popular',
      registered ? 'My posts' : '',
    ],
    [registered]
  );
  return (
    <>
      <ul
        className={classNames(styles.categiries, {
          [styles.categiriesMon]: valueOnMon,
        })}
      >
        {categoties.map((value, index) => (
          <li
            onClick={() => dispatch(setCategories(index))}
            className={classNames(
              { [styles.noCategories]: value === '' },
              valueCategories === index ? styles.item__active : styles.item,
              valueCategories === index
                ? {
                    [styles.activeMon]: valueOnMon,
                  }
                : ''
            )}
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
