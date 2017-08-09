import React from 'react';

import Apples      from '../containers/container-apples';
import ApplesList  from '../containers/container-apples-list';

import AppleSecret from '../containers/container-apple-secret';
import AppleDesire from '../containers/container-apple-desire';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="app">

          <div className="app-item">

            <AppleSecret/>
            <AppleDesire/>

          </div>
          <div className="app-item">

            <Apples/>
            <ApplesList/>

          </div>


        </div>
    );
  }
}
