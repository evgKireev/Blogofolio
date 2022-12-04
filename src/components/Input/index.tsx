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
  value?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<typeInput> = ({
  title,
  onChange,
  value,
  type,
  disabled,
  placeholder,
  className,
}) => {
  const styleInput = styles[type];
  return (
    <div>
      <h3>{title}</h3>
        <input
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames(styles.input, styleInput, className, {
            [styles.disabled]: disabled,
          })}
        ></input>
    </div>
  );
};

export default Input;
