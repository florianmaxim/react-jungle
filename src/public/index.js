require('babel-register');

import './styles/index.scss';

import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

ReactDOM.render((

    <BrowserRouter>
      <Routes/>
    </BrowserRouter>

), document.getElementById('app'));

//Required for using hot module replacement (comes width webpack-dev-server)
//Needs to sit in the main entry file
if(module.hot) {
   module.hot.accept();
}
