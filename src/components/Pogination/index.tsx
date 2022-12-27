import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { setPoginationSelect } from '../../redux/blogsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Pogination.module.scss';

type PoginationType = {
  totalPageCount: number;
};

const Pogination: React.FC<PoginationType> = ({ totalPageCount }) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const dispatch = useAppDispatch();
  return (
    <>
      <ReactPaginate
        className={styles.items}
        disabledClassName={styles.disabled}
        pageClassName={styles.item}
        pageLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueOnMon,
        })}
        previousClassName={styles.previous__item}
        previousLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueOnMon,
        })}
        nextClassName={styles.next__item}
        nextLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueOnMon,
        })}
        breakClassName="page-item"
        breakLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueOnMon,
        })}
        activeClassName={styles.active}
        breakLabel="..."
        nextLabel="Next ->"
        previousLabel="<- Prev"
        onPageChange={(e) => dispatch(setPoginationSelect(e.selected + 1))}
        pageCount={totalPageCount}
      />
    </>
  );
};

export default Pogination;
