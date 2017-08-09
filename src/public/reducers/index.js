import {combineReducers} from 'redux';

//The 'origin', the 'available' items.
import ReducerApples       from './reducer-apples';
//The 'target', the 'selected' items.
import ReducerApplesList from './reducer-apples-list';

import ReducerAppleActive  from './reducer-apple-active';

const allReducers = combineReducers({

    apples: ReducerApples,
    applesList: ReducerApplesList,

    appleActive: ReducerAppleActive

});

export default allReducers
