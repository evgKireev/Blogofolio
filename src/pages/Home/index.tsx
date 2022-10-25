import Footer from '../../components/Fotter';
import Header from '../../components/Header';
import styles from './Home.module.scss';

import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Home;
