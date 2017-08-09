import React from 'react';

import {connect} from 'react-redux'

class AppleSecret extends React.Component {

  render(){
    if(!this.props.apple){
      return <div>No secret here</div>
    }

    return (
      <div>
        <h3>My secret is: </h3>
        <p>{this.props.apple.secret}</p>
      </div>
    )

  }

}

function props(state){

  return {

      apple: state.appleActive
  }

}

export default connect(props)(AppleSecret);
