import Footer from '../../components/Fotter';
import Header from '../../components/Header';
import styles from './Home.module.scss';

import { Outlet } from 'react-router-dom';
import Modal from '../../components/Modal';
import ModalImg from '../../components/ModalImg';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
        <Footer />
        <Modal />
        <ModalImg />
      </div>
    </>
  );
}

export default Home;
