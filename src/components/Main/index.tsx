import cardsData from '../../data/cards';
import Categories from '../Categiries/index';
import OneNews from '../OneNews/index';
import Pogination from '../Pogination';
import { oneNewsBlock } from '../OneNews/index';
import styles from './Main.module.scss';
import { useAppSelector } from '../../redux/hooks';

const Main: React.FC = () => {
  const activeTabs = useAppSelector(
    (state) => state.categoriesSlice.valueCategoria
  );
  const likePosts = useAppSelector((state) => state.controlsSlice.likedPosts);
  const bookMarkPost = useAppSelector(
    (state) => state.controlsSlice.bookmarkPosts
  );

  const cardsArray = () => {
    if (activeTabs === 1) {
      return bookMarkPost;
    } else if (activeTabs === 2) {
      return likePosts;
    } else {
      return cardsData;
    }
  };
  const cards = cardsArray();
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
                      card={card}
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
                        card={card}
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
