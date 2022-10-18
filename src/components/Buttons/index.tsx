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
  onClick: () => void;
  className: string;
  disabled: boolean;
};

const Buttons: FC<typeButton> = ({ title, type, onClick, disabled }) => {
  const stylesButton = styles[type];

  console.log(styles.disabled__error);

  return (
    <>
      <button
        className={classNames(
          styles.buttons,
          stylesButton,
          {
            [styles.disabled]: disabled,
          },
          { [styles.disabled__error]: disabled }
        )}
        onClick={onClick}
      >
        <p>{title}</p>
      </button>
    </>
  );
};

export default Buttons;
