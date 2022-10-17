import ReactPaginate from 'react-paginate';
import styles from './Pogination.module.scss';
function Pogination() {
  return (
    <>
      <ReactPaginate className={styles.items}
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
        // onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={6}
        previousLabel="<- Prev"
        // renderOnZeroPageCount={0}
      />
    </>
  );
}

export default Pogination;
