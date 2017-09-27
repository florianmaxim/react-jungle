import axios from 'axios';

import * as config from '../../../config.json';

const pseudo = [
  {
    _id: "1",
    title: "lala",
    text: "lolo."
  },
  {
    _id: "1",
    title: "lele",
    text: "lulu"
  }
]

export const fetchArticles = () => {

  return (dispatch) => {

    axios.get(config.api.url+'/blog')

      .then((response) => {
        dispatch({type: "RECEIVE_ARTICLES", payload: response.data})
      })

      .catch((err) => {
        dispatch({type: "RECEIVE_ARTICLES_ERROR", payload: err})
      });

    // dispatch({type: "RECEIVE_ARTICLES", payload: pseudo})

  }
}
