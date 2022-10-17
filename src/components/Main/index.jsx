import Categories from '../Categiries/index';
import OneNews from '../OneNews/index';
import OneNewsAside from '../OneNewsAside/index';
function Main() {
  return (
    <main>
      <h1>Blog</h1>
      <Categories />
      <div className="container__inner">
        <div>
          <OneNews />
        </div>
        <div>
          <OneNewsAside />
          <OneNewsAside />
          <OneNewsAside />
          <OneNewsAside />
          <OneNewsAside />
          <OneNewsAside />
        </div>
      </div>
    </main>
  );
}

export default Main;
