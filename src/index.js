import React from 'react';
import ReactDOM from 'react-dom';

const title = 'This will be reciplease in time';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();