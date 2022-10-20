import styles from './OneNews.module.scss';
import ControlNews from '../ControlNews';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';

export enum oneNewsBlock {
  DefaultBlock = 'defaultblock',
  GridBlock = 'gridblock',
  AsideBlock = 'asideblock',
}

export type oneNewType = {
  type: oneNewsBlock;
  title: string;
  dateNews: string;
  text?: string;
  images: string;
  className: string;
};

const OneNews: React.FC<oneNewType> = ({
  title,
  dateNews,
  text,
  images,
  type,
}) => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const stylesOneBlock = styles[type];
  return (
    <div className={styles.wrapper}>
      <div className={stylesOneBlock}>
        <div>
          <span>{dateNews}</span>
          <h2 className={classNames(stylesOneBlock, { bodyMon: valueOnMon })}>
            {title}
          </h2>
          <p>{text}</p>
        </div>
        <div className={stylesOneBlock}>
          <img src={images} alt="img" />
        </div>
      </div>
      <ControlNews />
    </div>
  );
};

export default OneNews;
