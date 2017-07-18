import React from 'react';

import Module from './Module';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <div>App<Module/></div>
  }
}
