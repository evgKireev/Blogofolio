
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueOnMon } from '../../redux/home/menuSlice';
import { setValueMenu } from '../../redux/home/menuSlice';
import UserControl from '../UserControl';
import Buttons from '../Buttons';
import { ButtonType } from '../Buttons';
import { useEffect, useRef } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames';

type menuType = {
  btnRef: { current: null };
};

const Menu: React.FC<menuType> = ({ btnRef }) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const valueMenu = useAppSelector((state) => state.menuSlice.valueMenu);
  const dispath = useAppDispatch();
  const menuRef = useRef(null);

  useEffect(() => {
    const eventMenu = (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        path: null[];
      };
      if (
        !_e.path.includes(menuRef.current) &&
        !_e.path.includes(btnRef.current)
      ) {
        dispath(setValueMenu(false));
      }
    };
    document.body.addEventListener('click', eventMenu);
    return () => {
      document.body.removeEventListener('click', eventMenu);
    };
  }, []);

  return (
    <div
      ref={menuRef}
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
              onClick={() => {
                dispath(setValueOnMon(false));
                dispath(setValueMenu(false));
              }}
              className={styles.img__inner}
            >
              <BsSun
                className={classNames(styles.sun, {
                  [styles.moon]: valueOnMon,
                })}
              />
            </div>
            <div
              onClick={() => {
                dispath(setValueOnMon(true));
                dispath(setValueMenu(false));
              }}
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
            className={styles.btn}
            title="Log Out"
            onClick={() => {
              console.log('Log Out');
              dispath(setValueMenu(false));
            }}
            type={ButtonType.Secondary}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
