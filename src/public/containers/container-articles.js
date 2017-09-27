import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as articles from '../actions/actions-articles';

class ContainerArticles extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    addEventListener('click', (e) =>  this.props.fetchArticles())

  }

  render() {

    if(!this.props.articles){
      return (

        <div className="container-articles">
          No Articles loaded.
        </div>
      )
    }

    return (

      <div className="container-articles">

        {

          this.props.articles.map((article, index) => {

             return (

               <div key={index} className="container-articles-item">

                <h1>{article.title}</h1>
                <h2>{article.text}</h2>

               </div>

             );

          })

        }

      </div>

    );

  }

}

function props(state) {

  return {
    articles: state.articles
  };

}

function actions(dispatch){

  return bindActionCreators({

    fetchArticles: articles.fetchArticles

  }, dispatch);

}

export default connect(props, actions)(ContainerArticles);
