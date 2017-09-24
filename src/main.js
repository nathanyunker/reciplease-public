import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from "./store.js"
import App from './app'
 
render(
  <Provider store={store}>

  </Provider>,
  document.getElementById('root')
)