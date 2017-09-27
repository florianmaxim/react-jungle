import './styles/index.scss';

import React from 'react';

import { hydrate } from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

hydrate((

    <BrowserRouter>
      <Routes/>
    </BrowserRouter>

), document.getElementById('app'));

if(module.hot) {
   module.hot.accept();
}
