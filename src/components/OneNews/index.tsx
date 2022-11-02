import { Link, useParams } from 'react-router-dom';
import ControlNews from '../ControlNews';
import classNames from 'classnames';
import styles from './OneNews.module.scss';
import { useAppSelector } from '../../redux/hooks';

export enum oneNewsBlock {
  DefaultBlock = 'defaultblock',
  GridBlock = 'gridblock',
  AsideBlock = 'asideblock',
}

export type oneNewType = {
  type: oneNewsBlock;
  className: oneNewsBlock;
  title: string;
  date: string;
  desc?: string;
  image: string;
  id: number;
};

const OneNews: React.FC<oneNewType> = ({
  title,
  date,
  desc,
  image,
  type,
  className,
  id,
}) => {
  const stylesOneBlock = styles[type];
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  return (
    <>
      <div className={classNames(stylesOneBlock, className)}>
        <div>
          <span>{date}</span>
          <Link to={`one-blog/${id}`} className={classNames({[styles.bodyMon]:valueOnMon})}>
            <h2 className={classNames(stylesOneBlock)}>{title}</h2>
          </Link>
          <p>{desc}</p>
        </div>
        <div className={stylesOneBlock}>
          <img src={image} alt="img" />
        </div>
      </div>
      <ControlNews id={id} />
    </>
  );
};

export default OneNews;
