import ReactPaginate from 'react-paginate';
import { setPoginationSelect } from '../../redux/blogsSlice';
import { useAppDispatch } from '../../redux/hooks';
import styles from './Pogination.module.scss';

type PoginationType = {
  totalPageCount: number;
};

const Pogination: React.FC<PoginationType> = ({ totalPageCount }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <ReactPaginate
        className={styles.items}
        disabledClassName={styles.disabled}
        pageClassName={styles.item}
        pageLinkClassName="page-link"
        previousClassName={styles.previous__item}
        previousLinkClassName="page-link"
        nextClassName={styles.next__item}
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName={styles.active}
        breakLabel="..."
        nextLabel="Next ->"
        previousLabel="<- Prev"
        onPageChange={(e) => dispatch(setPoginationSelect(e.selected+1))}
        pageCount={totalPageCount}
      />
    </>
  );
};

export default Pogination;
