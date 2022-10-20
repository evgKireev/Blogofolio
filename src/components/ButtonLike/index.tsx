import styles from './ButtonLike.module.scss';
import { AiOutlineLike } from 'react-icons/ai';
import classNames from 'classnames';

export type typeButtonLike = {
  onClick: () => void;
  disabled?: boolean;
};

const ButtonLike: React.FC<typeButtonLike> = ({ onClick, disabled }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(styles.buttonLike, {
          [styles.disabled]: disabled,
        })}
      >
        <AiOutlineLike />
      </button>
    </>
  );
};

export default ButtonLike;
