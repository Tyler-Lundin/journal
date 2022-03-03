import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import {BrowserRouter, HashRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <HashRouter>
        <App />
      </HashRouter>   */}
      <h1>test</h1>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
