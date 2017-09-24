import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from "./store.js"

const testFolder = 'app/src';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log('THE FILE', file);
})
 
render(
  <Provider store={store}>

  </Provider>,
  document.getElementById('root')
)