import React from 'react';

import App from './components/App';

import {Route, Switch} from 'react-router';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';

const store = createStore(allReducers);

export default class Routes extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={store}>
        <Switch>
          <Route exact path="*">
            <App/>
          </Route>
        </Switch>
      </Provider>
    );
  }
}


/*
<Route path="/hi/:name" component={Module}/>
<Route path="/hi" component={Module}/>

<Route path="/bye/:name" component={Module2}/>
<Route path="/bye" component={Module2}/>

<Route path="/*" component={Module}/>
*/
