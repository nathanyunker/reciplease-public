import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './app'
// import appReducer from './reducers'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import store from "./store.js"

// let middleware = applyMiddleware(thunk, logger);
// let store = createStore(appReducer, middleware);

// store.dispatch((dispatch) => {
// 	dispatch({type: "FETCH_USERS_START"});
// 	fetch('http://rest.learncode.academy/api/wstern/users', {
//       method: 'get'
//     }).then(function(response) {
//         return response.json();
//     }).then(function(data) { 
//     	dispatch({type: "RECIEVE_USERS", payload: data});
//       console.log('DATA', data)
//     });

// })
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)