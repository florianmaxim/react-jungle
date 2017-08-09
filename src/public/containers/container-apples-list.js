import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectApple} from '../actions/index';
import {deleteApple} from '../actions/index';

class ApplesList extends Component {

  componentWillMount(){
    // console.log(this.props)
  }

  componentWillUpdate(){
    // console.log(this.props)
  }

  componentWillReceiveProps(){
    // console.log(this.props)
  }

    renderList() {

      console.log(this.props.applesList.length)
        return this.props.applesList.map((apple, index) => {
            return (
                <li key={index}>


                {apple.name}


                <a href="#" onClick={() => this.props.deleteApple(index)}>
                [DELETE]
                </a>

                </li>
            );
        });
    }

    render() {
        return (
            <div>
              <h3>You put the following apples on your list:</h3>
              <ul>
                  {this.renderList()}
              </ul>
            </div>
        );
    }

}

function props(state) {
  return {
    apples: state.apples,
    applesList: state.applesList,
  };
}

function actions(dispatch){

  return bindActionCreators({

    selectApple: selectApple,
    deleteApple: deleteApple

  }, dispatch)

}

export default connect(props, actions)(ApplesList);
