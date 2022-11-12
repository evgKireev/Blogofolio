import cardsData from '../../data/cards';
import Categories from '../Categiries/index';
import OneNews from '../OneNews/index';
import Pogination from '../Pogination';
import { oneNewsBlock } from '../OneNews/index';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <main>
      <h1>Blog</h1>
      <Categories />
      {!cardsData.length ? (
        <h1 className={styles.noPosts}>No posts!</h1>
      ) : (
        <div className={styles.container__inner}>
          <div>
            <div className={styles.bigNews}>
              {cardsData.map((card, index) => {
                if (index === 0) {
                  return (
                    <OneNews
                      key={card.id}
                      type={oneNewsBlock.DefaultBlock}
                      className={oneNewsBlock.DefaultBlock}
                      card={card}
                      desc={card.text}
                    />
                  );
                }
              })}
            </div>

            <div className={styles.blockGrid}>
              {cardsData.map((card, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <div key={card.id} className={styles.gridNews}>
                      <OneNews
                        type={oneNewsBlock.GridBlock}
                        className={oneNewsBlock.GridBlock}
                        card={card}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div>
            {cardsData.map((card, index) => {
              if (index > 4) {
                return (
                  <div key={card.id} className={styles.asignNews}>
                    <OneNews
                      type={oneNewsBlock.AsideBlock}
                      className={oneNewsBlock.AsideBlock}
                      card={card}
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
