import { ReactElement } from 'react';
import styles from './BlogContainer.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '../../redux/hooks';

type BlogContainerType = {
  title: string;
  children: ReactElement;
  lesson_num: number;
};

const BlogContainer: React.FC<BlogContainerType> = ({
  title,
  children,
  lesson_num,
}) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);

  return (
    <div>
      <ul className={styles.breadcrumbs}>
        <li>
          <Link className={classNames({ [styles.bodyMon]: valueOnMon })} to="/">
            {' '}
            Home
          </Link>
        </li>
        <li>Post {lesson_num}</li>
      </ul>
      <h1>{title}</h1>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default BlogContainer;
