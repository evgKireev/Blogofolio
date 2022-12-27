import { AiOutlineClose } from 'react-icons/ai';
import OneNews from '../OneNews';
import { oneNewsBlock } from '../OneNews';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.scss';
import { setDropdawn, setIsOpenModal } from '../../redux/home/controlsSlice';
import classNames from 'classnames';

const Modal = () => {
  const news = useAppSelector((state) => state.controlsSlice.dropdawn);
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const isOpenModal = useAppSelector(
    (state) => state.controlsSlice.isOpenModal
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.showModal]: isOpenModal,
        })}
      >
        <div
          className={classNames(styles.container, {
            [styles.bodyMon]: valueOnMon,
          })}
        >
          {news && (
            <OneNews
              type={oneNewsBlock.DefaultBlock}
              className={oneNewsBlock.DefaultBlock}
              card={news}
              desc={news.text}
            />
          )}
          <AiOutlineClose
            className={styles.closes}
            onClick={() => dispatch(setIsOpenModal(false))}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
