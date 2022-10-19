import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Fotter';
import Pogination from './components/Pogination';
import { useAppSelector } from './redux/hooks';
import classNames from 'classnames';

const App: React.FC = () => {
  const valueOnMon = useAppSelector((state) => state.menuSlice.valueOnMon);
  return (
    <div className="">
      <Header />
      <div
        className={classNames(valueOnMon ? { bodyMon: valueOnMon } : 'bodySun')}
      >
        <div className="container">
          <Home />
          <Pogination />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
