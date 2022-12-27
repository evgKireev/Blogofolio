import { AiOutlineClose } from 'react-icons/ai';
import styles from './ConfirmationModal.module.scss';
import classNames from 'classnames';
import Buttons, { ButtonType } from '../Buttons';
import { useAppSelector } from '../../redux/hooks';

type ConfirmationModalType = {
  isOpenModal: boolean;
  text: string;
  setIsOpenModal: (value: boolean) => void;
  deletePost: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalType> = ({
  isOpenModal,
  text,
  setIsOpenModal,
  deletePost,
}) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);

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
          <h2>{`Are you sure you want to ${text} post?`}</h2>
          <div className={styles.innerBtn}>
            <Buttons
              title={'Cancel'}
              type={ButtonType.Secondary}
              className={''}
              onClick={() => setIsOpenModal(false)}
            />
            <Buttons
              title={'Delete'}
              type={ButtonType.Error}
              className={''}
              onClick={deletePost}
            />
          </div>
          <AiOutlineClose
            className={styles.closes}
            onClick={() => setIsOpenModal(false)}
          />
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
