import React from 'react';

import Blog from './Blog';
import Tutorials from './Tutorials';

import {Route, Switch} from 'react-router';

import {Provider} from 'react-redux';

import store from './Store';

export default class Routes extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={store}>
        <Switch>
          <Route exact path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/tutorials">
            <Tutorials/>
          </Route>
        </Switch>
      </Provider>
    );
  }
}
