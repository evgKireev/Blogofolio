import classNames from 'classnames';
import styles from './Input.module.scss';

export enum InputType {
  Default = 'default',
  Error = 'error',
  Disabled = 'disabled',
}

export type typeInput = {
  title?: string;
  className: InputType;
  type: InputType;
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<typeInput> = ({
  title,
  onChange,
  value,
  type,
  disabled,
}) => {
  const styleInput = styles[type];
  return (
    <>
      <h3>{title}</h3>
      <input
        value={value}
        onChange={onChange}
        className={classNames(styles.input, styleInput, {
          [styles.disabled]: disabled,
        })}
      ></input>
    </>
  );
};

export default Input;
