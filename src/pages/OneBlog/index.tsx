import BlogContainer from '../../components/BlogContainer';
import ButtonDisLike from '../../components/ButtonDisLike';
import ButtonLike from '../../components/ButtonLike';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './OneBlog.module.scss';

const OneBlog = () => {
  return (
    <BlogContainer
      title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
      lesson_num={1}
    >
      <div className={styles.container}>
        <img className={styles.img}
          src="https://st2.depositphotos.com/1000647/6687/i/950/depositphotos_66874005-stock-photo-astronaut-in-outer-space.jpg"
          alt="img"
        />
        <p className={styles.text}>
          'Astronauts Kayla Barron and Raja Chari floated out of the
          International Space Station airlock for a spacewalk Tuesday,
          installing brackets and struts to support new solar arrays to upgrade
          the research lab’s power system on the same day that crewmate Mark
          Vande Hei marked his 341st day in orbit, a U.S. record for a single
          spaceflight.
        </p>
        <div className={styles.control}>
          <div className={styles.like}>
            <ButtonLike onClick={() => {}} />
            <ButtonDisLike onClick={() => {}} />
          </div>
          <ButtonIcon onClick={() => {}} title="Add to favorites" />
        </div>
      </div>
    </BlogContainer>
  );
};

export default OneBlog;
