import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addApple} from '../actions/index';
import {selectApple} from '../actions/index';

class UserList extends Component {

  componentDidMount(){

  }

  componentWillUpdate(){
    console.log(this.props);
  }

    renderList() {
        return this.props.apples.map((apple) => {
            return (
                <li key={apple.id}
                onClick={() => this.props.addApple(apple)}
                onMouseOver={() => this.props.selectApple(apple)}

                ><a href="#">
                {apple.name}
                </a></li>
            );
        });
    }

    render() {
        return (
            <div>
              <h3>These apples are available:</h3>
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

    addApple: addApple,
    selectApple: selectApple

  }, dispatch)
}

export default connect(props, actions)(UserList);
