import Categories from '../Categiries/index';
import OneNews from '../OneNews/index';
import Pogination from '../Pogination';
import Loader from '../Loader';
import { oneNewsBlock } from '../OneNews/index';
import styles from './Main.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import { getBlogs } from '../../redux/blogsSlice';

const Main: React.FC = () => {
  const { data } = useAppSelector((state: RootState) => state.blogsSlice);
  const activeTabs = useAppSelector(
    (state) => state.categoriesSlice.valueCategoria
  );
  const likePosts = useAppSelector((state) => state.controlsSlice.likedPosts);
  const bookMarkPost = useAppSelector(
    (state) => state.controlsSlice.bookmarkPosts
  );
  const { status } = useAppSelector((state) => state.blogsSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const cardsArray = () => {
    if (activeTabs === 1) {
      return bookMarkPost;
    } else if (activeTabs === 2) {
      return likePosts;
    } else {
      return data;
    }
  };
  const blogs = cardsArray();

  if (!blogs.length) {
    return (
      <>
        <h1>Blog</h1>
        <Categories />
        {status === 'pending' ? (
         <Loader />
        ) : (
          <h1 className={styles.noPosts}>No posts!</h1>
        )}
      </>
    );
  }
  {
  }

  return (
    <main>
      <h1>Blog</h1>
      <Categories />
      {status === 'pending' ? (
       <Loader />
      ) : (
        <div className={styles.container__inner}>
          {status === 'rejected' ? (
            <div className={styles.error}>
              <h2>
                Произошла ошибка <span>😕</span>
              </h2>
              <p>
                К сожалению, не удалось получить посты. Попробуйте повторить
                попытку позже!
              </p>
            </div>
          ) : (
            <>
              <div>
                <div className={styles.bigNews}>
                  {blogs.map((card, index) => {
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
                  {blogs.map((card, index) => {
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
                {blogs.map((card, index) => {
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
            </>
          )}

          <Pogination />
        </div>
      )}
    </main>
  );
};

export default Main;
