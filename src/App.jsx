import './scss/app.scss';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <h1>Blog</h1>
        <Main />
      </main>
    </div>
  );
}

export default App;
