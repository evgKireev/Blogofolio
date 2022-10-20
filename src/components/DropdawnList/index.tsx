import classNames from 'classnames';
import styles from './DropdawnList.module.scss';

export type typeDropdawn = {
  valueDropdawn: boolean;
};

const DropdawnList: React.FC<typeDropdawn> = ({valueDropdawn}) => {
  return (
    <>
      <ul
        className={classNames(styles.drop, { [styles.active]: valueDropdawn })}
      >
        <li className={styles.dropItem}>Edit</li>
        <li className={styles.dropItem}>Delete</li>
      </ul>
    </>
  );
};

export default DropdawnList;
