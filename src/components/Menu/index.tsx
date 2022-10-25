import { Link, NavLink } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueOnMon } from '../../redux/home/menuSlice';
import { setValueMenu } from '../../redux/home/menuSlice';
import { ButtonType } from '../Buttons';
import { useEffect, useRef } from 'react';
import UserControl from '../UserControl';
import Buttons from '../Buttons';
import styles from './Menu.module.scss';
import classNames from 'classnames';
import '../../scss/app.scss';

type menuType = {
  btnRef: { current: null };
};

const Menu: React.FC<menuType> = ({ btnRef }) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const valueMenu = useAppSelector((state) => state.menuSlice.valueMenu);
  const dispath = useAppDispatch();
  const menuRef = useRef(null);
  const registered = true;

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
      {registered && (
        <UserControl
          userName={'Artem Malkin'}
          onClick={() => console.log('User')}
        />
      )}
      <div className={styles.menu}>
        <div className={styles.menuBlock}>
          <NavLink
            to="."
            end
            onClick={() => dispath(setValueMenu(false))}
            className={({ isActive }) =>
              classNames(styles.item, { [styles.active]: isActive })
            }
          >
            Home
          </NavLink>
          {registered && (
            <NavLink
              to="addPost"
              onClick={() => dispath(setValueMenu(false))}
              className={({ isActive }) =>
                classNames(styles.item, { [styles.active]: isActive })
              }
            >
              Add post
            </NavLink>
          )}
        </div>

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
          {registered ? (
            <Link to="">
              <Buttons
                className={styles.btn}
                title="Log Out"
                onClick={() => dispath(setValueMenu(false))}
                type={ButtonType.Secondary}
                disabled={false}
              />
            </Link>
          ) : (
            <Link to="signIn">
              <Buttons
                className={styles.btn}
                title="Sign In"
                onClick={() => dispath(setValueMenu(false))}
                type={ButtonType.Secondary}
                disabled={false}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
