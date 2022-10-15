import styles from './Categories.module.scss';
function Categories() {
  const categoties = ['All', 'My favorites', 'Popular'];
  return (
    <>
      <ul className={styles.categiries}>
        {categoties.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
