import { FC } from 'react';
import styles from './Buttons.module.scss';
import classNames from 'classnames';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Error = 'error',
}

export type typeButton = {
  title: string;
  type: ButtonType;
  onClick?: () => void;
  className: string;
  disabled?: boolean;
  error?: string;
};

const Buttons: FC<typeButton> = ({ title, type, onClick, disabled, error,className }) => {
  const stylesButton = styles[type];
  return (
    <>
      <button
        className={classNames(
          styles.buttons,
          stylesButton,
          className,
          {
            [styles.disabled]: disabled,
          },
          { [styles.disabled__error]: disabled }
        )}
        onClick={onClick}
      >
        <p>{title}</p>
      </button>
      <p>{error && <div>{error}</div>}</p>
    </>
  );
};

export default Buttons;
