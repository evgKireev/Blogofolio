import styles from './ButtonDisLike.module.scss';
import { AiOutlineDislike } from 'react-icons/ai';
import classNames from 'classnames';

export type typeButtonDisLike = {
  onClick: () => void;
  disabled?: boolean;
};

const ButtonDisLike: React.FC<typeButtonDisLike> = ({ onClick, disabled }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(styles.buttonDisLike, {
          [styles.disabled]: disabled,
        })}
      >
        <AiOutlineDislike />
      </button>
    </>
  );
};

export default ButtonDisLike;