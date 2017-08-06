import React from 'react';

import {connect} from 'react-redux'

class AppleDesire extends React.Component {

  render(){
    if(!this.props.apple){
      return <div>No desire here</div>
    }

    return (
      <div>
        <h3>My secret is: </h3>
        <p>{this.props.apple.desire}</p>
      </div>
    )

  }

}

function props(state){

  return {

      apple: state.applesActive
  }

}

export default connect(props)(AppleDesire);
