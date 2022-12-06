import noFaundPng from '../../assets/img/Lovepik_com-832477006-404 network error astronaut planet.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';
import styles from './NoFaund.module.scss';


const NoFaund = () => {
    const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  return (
    <div className={styles.inner}>
      <Link
        to=".."
        className={classNames(styles.link, { [styles.bodyMon]: valueOnMon })}
      >
        Back to home
      </Link>
      <img className={styles.png} src={noFaundPng} alt="404" />
    </div>
  );
};

export default NoFaund;
