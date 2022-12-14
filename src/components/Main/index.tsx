import Categories from '../Categiries/index';
import OneNews from '../OneNews/index';
import Pogination from '../Pogination';
import Loader from '../Loader';
import { oneNewsBlock } from '../OneNews/index';
import styles from './Main.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { getBlogs, getMyBlogs } from '../../redux/blogsSlice';
import { PER_PAGE } from '../../@types/constant';
import Sort from '../Sort';

const Main: React.FC = () => {
  const { data } = useAppSelector((state) => state.blogsSlice);
  const { dataMyBlogs } = useAppSelector((state) => state.blogsSlice);
  const activeTabs = useAppSelector(
    (state) => state.categoriesSlice.valueCategoria
  );
  const likePosts = useAppSelector((state) => state.controlsSlice.likedPosts);
  const bookMarkPost = useAppSelector(
    (state) => state.controlsSlice.bookmarkPosts
  );
  const { status } = useAppSelector((state) => state.blogsSlice);
  const { registered } = useAppSelector((state) => state.signInSlice);
  const { poginationSelect } = useAppSelector((state) => state.blogsSlice);
  const { poginationCount } = useAppSelector((state) => state.blogsSlice);
  const { inputSearch } = useAppSelector((state) => state.inputSlice);
  const { sortValue } = useAppSelector((state) => state.categoriesSlice);
  const dispatch = useAppDispatch();
  const totalPageCount = Math.ceil(poginationCount / PER_PAGE);
  const offset = PER_PAGE * (poginationSelect - 1);

  useEffect(() => {
    dispatch(getBlogs({ offset, search: inputSearch, ordering: sortValue }));
    if (registered) {
      dispatch(getMyBlogs());
    }
  }, [registered, poginationSelect, inputSearch, sortValue]);

  const cardsArray = () => {
    if (activeTabs === 1) {
      return bookMarkPost;
    } else if (activeTabs === 2) {
      return likePosts;
    } else if (activeTabs === 3) {
      return dataMyBlogs;
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
      <div className={styles.categoriesInner}>
        <Categories />
        <Sort />
      </div>
      {status === 'pending' ? (
        <Loader />
      ) : (
        <div className={styles.container__inner}>
          {status === 'rejected' ? (
            <div className={styles.error}>
              <h2>
                ?????????????????? ???????????? <span>????</span>
              </h2>
              <p>
                ?? ??????????????????, ???? ?????????????? ???????????????? ??????????. ???????????????????? ??????????????????
                ?????????????? ??????????!
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
        </div>
      )}
      <Pogination totalPageCount={totalPageCount} />
    </main>
  );
};

export default Main;
