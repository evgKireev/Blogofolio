import './scss/app.scss';
import { ButtonType } from './components/Buttons';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Fotter';
import Pogination from './components/Pogination';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <Pogination />
        <Footer />
      </div>
    </>
  );
};

export default App;
