import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectApple} from '../actions/index';

class UserList extends Component {

  componentDidMount(){
    console.log(this.props)
  }

    renderList() {
        return this.props.apples.map((apple) => {
            return (
                <li key={apple.id}
                onClick={() => this.props.selectApple(apple)}
                ><a href="#">
                {apple.name}
                </a></li>
            );
        });
    }

    render() {
        return (
            <div>
              <ul>
                  {this.renderList()}
              </ul>
            </div>
        );
    }

}

function props(state) {
  return {
      apples: state.apples
  };
}

function actions(dispatch){
  return bindActionCreators({selectApple: selectApple}, dispatch)
}

export default connect(props, actions)(UserList);
