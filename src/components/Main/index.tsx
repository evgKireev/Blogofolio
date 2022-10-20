import Categories from '../Categiries/index';
import OneNews from '../OneNews/index';
import images from '../../assets/img/Rectangle39.png';
import { oneNewsBlock } from '../OneNews/index';
import ButtonLike from '../ButtonLike';
import ButtonDisLike from '../ButtonDisLike';
const Main: React.FC = () => {
  return (
    <main>
      <h1>Blog</h1>
      <Categories />
      <div className="container__inner">
        <div>
          <div>
            <OneNews
              type={oneNewsBlock.DefaultBlock}
              className={oneNewsBlock.DefaultBlock}
              images={images}
              title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              text="Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight."
              dateNews="April 20, 2021"
            />
          </div>
          <div className="gridBlock">
            <OneNews
              type={oneNewsBlock.GridBlock}
              className={oneNewsBlock.GridBlock}
              images={images}
              title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              dateNews="April 20, 2021"
            />
            <OneNews
              type={oneNewsBlock.GridBlock}
              className={oneNewsBlock.GridBlock}
              images={images}
              title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              dateNews="April 20, 2021"
            />
            <OneNews
              type={oneNewsBlock.GridBlock}
              className={oneNewsBlock.GridBlock}
              images={images}
              title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              dateNews="April 20, 2021"
            />
            <OneNews
              type={oneNewsBlock.GridBlock}
              className={oneNewsBlock.GridBlock}
              images={images}
              title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
              dateNews="April 20, 2021"
            />
          </div>
        </div>

        <div>
          <OneNews
            type={oneNewsBlock.AsideBlock}
            className={oneNewsBlock.AsideBlock}
            images={images}
            title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            dateNews="April 20, 2021"
          />
          <OneNews
            type={oneNewsBlock.AsideBlock}
            className={oneNewsBlock.AsideBlock}
            images={images}
            title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            dateNews="April 20, 2021"
          />
          <OneNews
            type={oneNewsBlock.AsideBlock}
            className={oneNewsBlock.AsideBlock}
            images={images}
            title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            dateNews="April 20, 2021"
          />
          <OneNews
            type={oneNewsBlock.AsideBlock}
            className={oneNewsBlock.AsideBlock}
            images={images}
            title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            dateNews="April 20, 2021"
          />
          <OneNews
            type={oneNewsBlock.AsideBlock}
            className={oneNewsBlock.AsideBlock}
            images={images}
            title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            dateNews="April 20, 2021"
          />
          <OneNews
            type={oneNewsBlock.AsideBlock}
            className={oneNewsBlock.AsideBlock}
            images={images}
            title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            dateNews="April 20, 2021"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
