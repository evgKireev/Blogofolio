import { Link } from 'react-router-dom';
import ControlNews from '../ControlNews';
import classNames from 'classnames';
import styles from './OneNews.module.scss';
import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { setDropdawn, setModalImg } from '../../redux/home/controlsSlice';
import { CardsType } from '../../@types/cards';

export enum oneNewsBlock {
  DefaultBlock = 'defaultblock',
  GridBlock = 'gridblock',
  AsideBlock = 'asideblock',
}

export type oneNewType = {
  type: oneNewsBlock;
  className: oneNewsBlock;
  card: CardsType;
  desc?: string;
};

const OneNews: React.FC<oneNewType> = ({ card, type, className, desc }) => {
  const { date, text, image, id, title } = card;
  const stylesOneBlock = styles[type];
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={classNames(stylesOneBlock, className)}>
        <div>
          <span>{date}</span>
          <Link
            to={`one-blog/${id}`}
            className={classNames({ [styles.bodyMon]: valueOnMon })}
          >
            <h2 className={classNames(stylesOneBlock)}>{title}</h2>
          </Link>
          <p>{desc}</p>
        </div>
        <div className={stylesOneBlock}>
          <img
            src={image}
            alt="img"
            onClick={() => dispatch(setModalImg(image))}
          />
        </div>
      </div>
      <ControlNews id={id} onClickDrop={() => dispatch(setDropdawn(card))} />
    </>
  );
};

export default OneNews;
