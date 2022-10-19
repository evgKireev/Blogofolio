import styles from './Menu.module.scss';
import classNames from 'classnames';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueOnMon } from '../../redux/home/menuSlice';
import { setValueMenu } from '../../redux/home/menuSlice';
import UserControl from '../UserControl';
import Buttons from '../Buttons';
import { ButtonType } from '../Buttons';
import { useEffect, useRef } from 'react';


const Menu: React.FC = () => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const valueMenu = useAppSelector((state) => state.menuSlice.valueMenu);
  const dispath = useAppDispatch();

 
  return (
    <div
      className={valueMenu ? styles.activeBlock : styles.inner}
    >
      <UserControl
        userName={'Artem Malkin'}
        onClick={() => console.log('User')}
      />
      <div className={styles.menu}>
        <ul>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>Add post</li>
        </ul>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <div
              onClick={() => dispath(setValueOnMon(false))}
              className={styles.img__inner}
            >
              <BsSun
                className={classNames(styles.sun, {
                  [styles.moon]: valueOnMon,
                })}
              />
            </div>
            <div
              onClick={() => dispath(setValueOnMon(true))}
              className={styles.img__inner}
            >
              <BiMoon
                className={classNames(styles.moon, {
                  [styles.bodyMon]: valueOnMon,
                })}
              />
            </div>
          </div>

          <Buttons
            className="secondary"
            title="Log Out"
            onClick={() => console.log('Log Out')}
            type={ButtonType.Secondary}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
