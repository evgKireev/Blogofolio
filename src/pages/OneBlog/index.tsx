import BlogContainer from '../../components/BlogContainer';
import ButtonDisLike from '../../components/ButtonDisLike';
import ButtonLike from '../../components/ButtonLike';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './OneBlog.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Buttons, { ButtonType } from '../../components/Buttons';
import { setBlog } from '../../redux/blogsSlice';

const OneBlog = () => {
  const { idUser } = useAppSelector((state) => state.signInSlice);
  const { blog } = useAppSelector((state) => state.blogsSlice);
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getBlog() {
      try {
        const { data } = await axios.get(
          `https://studapi.teachmeskills.by/blog/posts/` + id
        );
        dispatch(setBlog(data));
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
                <div className={styles.text}>{blog?.text}</div>
                <div className={styles.control}>
                  <div className={styles.like}>
                    {idUser === blog.author ? (
                      <Link to={`/one-blog/${id}/edit`}>
                        <Buttons
                          title={'Edit Post'}
                          type={ButtonType.Primary}
                          className={''}
                        />
                      </Link>
                    ) : null}
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
