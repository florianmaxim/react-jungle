import React from 'react';

import Apples      from '../containers/container-apples';
import AppleSecret from '../containers/container-apple-secret';
import AppleDesire from '../containers/container-apple-desire';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div>
          <Apples/>
          <AppleSecret/>
          <AppleDesire/>
        </div>
    );
  }
}
