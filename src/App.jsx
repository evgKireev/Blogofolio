import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Fotter';
import Pogination from './components/Pogination';

function App() {
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
}

export default App;
