import { BsBookmark } from 'react-icons/bs';
import styles from './ButtonIcon.module.scss';
import classNames from 'classnames';

export type ButtonIconType = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

const ButtonIcon: React.FC<ButtonIconType> = ({ title, disabled, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(styles.buttonIcon, {
          [styles.disabled]: disabled,
        })}
      >
        <BsBookmark />
        <p>{title}</p>
      </button>
    </>
  );
};

export default ButtonIcon;
