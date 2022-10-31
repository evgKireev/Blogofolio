import cardsData from '../../data/cards';

import { useEffect } from 'react';
import Categories from '../Categiries/index';
import OneNews from '../OneNews/index';
import Pogination from '../Pogination';
import { oneNewsBlock } from '../OneNews/index';
import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { setCards } from '../../redux/home/cardsSlice';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  const cards = useAppSelector((state) => state.cardsSlice.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCards(cardsData));
  }, []);

  return (
    <main>
      <h1>Blog</h1>
      <Categories />
      {!cards.length ? (
        <h1 className={styles.noPosts}>No posts!</h1>
      ) : (
        <div className={styles.container__inner}>
          <div>
            <div className={styles.bigNews}>
              {cards.map((card, index) => {
                if (index === 0) {
                  return (
                    <OneNews
                      key={card.id}
                      type={oneNewsBlock.DefaultBlock}
                      className={oneNewsBlock.DefaultBlock}
                      {...card}
                      desc={card.text}
                    />
                  );
                }
              })}
            </div>

            <div className={styles.blockGrid}>
              {cards.map((card, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <div key={card.id} className={styles.gridNews}>
                      <OneNews
                        type={oneNewsBlock.GridBlock}
                        className={oneNewsBlock.GridBlock}
                        {...card}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div>
            {cards.map((card, index) => {
              if (index > 4) {
                return (
                  <div key={card.id} className={styles.asignNews}>
                    <OneNews
                      type={oneNewsBlock.AsideBlock}
                      className={oneNewsBlock.AsideBlock}
                      {...card}
                    />
                  </div>
                );
              }
            })}
          </div>
          <Pogination />
        </div>
      )}
    </main>
  );
};

export default Main;
