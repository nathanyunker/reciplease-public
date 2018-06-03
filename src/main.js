import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from "./store.js"

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode! ENV is: ', process.env.NODE_ENV);
} else {
  console.log('LOOKS LIKE WE ARE IN PRODUCTION BABY!!');
}
 
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)