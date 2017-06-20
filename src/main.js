import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Caller from './Caller';
 
document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );

  // ReactDOM.render(
  //   React.createElement(Caller),
  //   document.getElementById('mountSecondly')
  // );
});