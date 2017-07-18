import React from 'react';

import Module from './Module';
import Module2 from './Module2';

import {Route, Switch} from 'react-router';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Module}/>

        <Route path="/hi/:name" component={Module}/>
        <Route path="/hi" component={Module}/>

        <Route path="/bye/:name" component={Module2}/>
        <Route path="/bye" component={Module2}/>

        <Route path="/*" component={Module}/>
      </Switch>
    );
  }
}
