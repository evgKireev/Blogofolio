import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Fotter';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ModalImg from '../../components/ModalImg';
import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
        <Footer />
        <Modal />
        <ModalImg />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default Home;
