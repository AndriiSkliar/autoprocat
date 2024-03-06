import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import App from './App.jsx'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/second-auto">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
