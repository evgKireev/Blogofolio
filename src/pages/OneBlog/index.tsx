import BlogContainer from '../../components/BlogContainer';
import ButtonDisLike from '../../components/ButtonDisLike';
import ButtonLike from '../../components/ButtonLike';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './OneBlog.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardsType } from '../../@types/cards';
import { useParams } from 'react-router-dom';

const OneBlog = () => {
  const [blog, setBlog] = useState<CardsType>();
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.get(
          `https://studapi.teachmeskills.by/blog/posts/` + id
        );
        setBlog(data);
      } catch (e: any) {
        setError(e.message);
      }
    }
    window.scrollTo(0, 0);
    getBlog();
  }, [id]);

  return (
    <div>
      {error ? (
        <div className={styles.error}>
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>
            К сожалению, не удалось получить пост. Попробуйте повторить попытку
            позже!
          </p>
        </div>
      ) : (
        <>
          {!blog ? (
            <div className={styles.ldsRoller}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <BlogContainer title={blog?.title} lesson_num={blog?.lesson_num}>
              <div className={styles.container}>
                <img className={styles.img} src={blog?.image} alt="img" />
                <p className={styles.text}>{blog?.text}</p>
                <div className={styles.control}>
                  <div className={styles.like}>
                    <ButtonLike onClick={() => {}} />
                    <ButtonDisLike onClick={() => {}} />
                  </div>
                  <ButtonIcon onClick={() => {}} title="Add to favorites" />
                </div>
              </div>
            </BlogContainer>
          )}
        </>
      )}
    </div>
  );
};

export default OneBlog;
