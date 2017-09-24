import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './app.js'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from "./store.js"
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)