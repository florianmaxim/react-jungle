require('babel-register');

import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));

//Required for using hot module replacement (comes by webpack-dev-server)
//Needs to sit in the main entry file
if(module.hot) {
  module.hot.accept();
  console.log(module);
}
