import './scss/app.scss';
import { ButtonType } from './components/Buttons';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Fotter';
import Pogination from './components/Pogination';
import Buttons from './components/Buttons';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <Pogination />
        <Footer />
      </div>
      <Buttons
        type={ButtonType.Primary}
        title={'Primary'}
        onClick={() => console.log('Primary')}
        className={ButtonType.Primary}
        disabled
      />
      <Buttons
        type={ButtonType.Secondary}
        title={'Secondary'}
        onClick={() => console.log('Secondary')}
        className={ButtonType.Secondary}
        disabled
      />
      <Buttons
        type={ButtonType.Error}
        title={'error'}
        onClick={() => console.log('error')}
        className={ButtonType.Error}
        disabled
      />
    </>
  );
};

export default App;
