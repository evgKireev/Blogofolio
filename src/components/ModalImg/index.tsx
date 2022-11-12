import { AiOutlineClose } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './ModalImg.module.scss';
import classNames from 'classnames';
import { setIsOpenModalImg } from '../../redux/home/controlsSlice';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const ModalImg = () => {
  const img = useAppSelector((state) => state.controlsSlice.modalImg);
  const isOpenModalImg = useAppSelector(
    (state) => state.controlsSlice.isOpenModalImg
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.showModal]: isOpenModalImg,
        })}
      >
        <div className={styles.container}>
          <div>
            <img className={styles.img} src={img} alt="" />
          </div>
          <AiOutlineClose
            className={styles.closes}
            onClick={() => dispatch(setIsOpenModalImg(false))}
          />
          <div className={styles.controls}>
            <div>
              <GrLinkPrevious className={styles.prev} />
              <span>Prev</span>
            </div>
            <div>
              <span>Next</span>
              <GrLinkNext className={styles.next} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalImg;
