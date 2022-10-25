import classNames from 'classnames';
import { ReactElement } from 'react';
import { useAppSelector } from '../../redux/hooks';
import styles from './FormContainer.module.scss';

type FormContainerType = {
  title: string;
  children: ReactElement;
};

const FormContainer: React.FC<FormContainerType> = ({ title, children }) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  return (
    <div>
      <a
        className={classNames(styles.link, { [styles.bodyMon]: valueOnMon })}
        href=""
      >
        Back to home
      </a>
      <h1>{title}</h1>
      <div className={styles.form}>{children}</div>
    </div>
  );
};

export default FormContainer;
