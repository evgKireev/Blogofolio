import React from 'react';
import styles from './Categories.module.scss';
import { setCategories } from '../../redux/home/categoriesSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const Categories: React.FC = () => {
  const categoties: string[] = ['All', 'My favorites', 'Popular'];
  const valueCategories = useAppSelector(
    (state) => state.categoriesSlice.valueCategoria
  );

  const dispatch = useAppDispatch();
  return (
    <>
      <ul className={styles.categiries}>
        {categoties.map((value, index) => (
          <li
            onClick={() => dispatch(setCategories(index))}
            className={
              valueCategories === index ? styles.item__active : styles.item
            }
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
