import React from 'react';

import {connect} from 'react-redux'

class AppleAdded extends React.Component {

  render(){
    if(!this.props.apple){
      return (
        <div>
          <h3>Last added apple: </h3>
          <p>No apple was added.</p>
        </div>
      )
    }

    return (
      <div>
        <h3>Last added apple: </h3>
        <p>{this.props.apple.name}</p>
      </div>
    )

  }

}

function props(state){

  return {

      apple: state.appleAdded
  }

}

export default connect(props)(AppleAdded);
