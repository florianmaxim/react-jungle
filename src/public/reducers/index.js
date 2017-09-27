import {combineReducers}   from 'redux';

import ReducerArticles from './reducer-articles';

const reducer = combineReducers({

    articles: ReducerArticles

});

export default reducer;
