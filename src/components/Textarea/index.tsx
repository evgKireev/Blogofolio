import classNames from 'classnames';
import styles from './Textarea.module.scss';

type TextAreaType = {
  title: string;
  placeholder: string;
  error?: boolean;
  disable?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
};

const TextArea: React.FC<TextAreaType> = ({
  title,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <div className={styles.inner}>
      <h3>{title}</h3>
      <textarea
        onChange={onChange}
        className={classNames(styles.textArea, className)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default TextArea;
