import classNames from 'classnames';
import styles from './Textarea.module.scss';

type TextAreaType = {
  title: string;
  placeholder: string;
  error?: boolean;
  disable?: boolean;
  className?: string;
};

const TextArea: React.FC<TextAreaType> = ({ title, placeholder, className }) => {
  return (
    <div className={styles.inner} >
      <h3>{title}</h3>
      <textarea
        className={classNames(styles.textArea,className)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
