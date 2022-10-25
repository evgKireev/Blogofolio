import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAppSelector } from '../../redux/hooks';
import styles from './FormContainer.module.scss';
import classNames from 'classnames';

type FormContainerType = {
  title: string;
  children: ReactElement;
};

const FormContainer: React.FC<FormContainerType> = ({ title, children }) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  return (
    <div>
      <Link
        to=".."
        className={classNames(styles.link, { [styles.bodyMon]: valueOnMon })}
      >
        Back to home
      </Link>
      <h1>{title}</h1>
      <div className={styles.form}>{children}</div>
    </div>
  );
};

export default FormContainer;
