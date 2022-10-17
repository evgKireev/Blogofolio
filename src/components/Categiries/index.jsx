import styles from './Categories.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCategories } from '../../redux/home/categoriesSlice';

function Categories() {
  const categoties = ['All', 'My favorites', 'Popular'];
  const valueCategories = useSelector(
    (state) => state.categoriesSlice.valueCategoria
  );

  const dispatch = useDispatch();
  return (
    <>
      <ul className={styles.categiries}>
        {categoties.map((value, index) => (
          <li
            onClick={() => dispatch(setCategories(index))}
            className={
              valueCategories === index ? styles.item__active : styles.item
            }
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
