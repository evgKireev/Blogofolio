import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.scss';
import App from './App';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
