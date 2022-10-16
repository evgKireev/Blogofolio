import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Fotter';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
