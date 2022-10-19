import React from 'react';
import styles from './Categories.module.scss';
import { setCategories } from '../../redux/home/categoriesSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import classNames from 'classnames';

const Categories: React.FC = () => {
  const categoties: string[] = ['All', 'My favorites', 'Popular'];
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const valueCategories = useAppSelector(
    (state) => state.categoriesSlice.valueCategoria
  );

  const dispatch = useAppDispatch();
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
              valueCategories === index ? styles.item__active : styles.item,
              valueCategories === index ?  { [styles.activeMon]: valueOnMon }: ''
            )}
            key={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
