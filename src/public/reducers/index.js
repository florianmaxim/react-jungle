import {combineReducers} from 'redux';
import ReducerApples       from './reducer-apples';
import ReducerApplesActive from './reducer-apples-active';

const allReducers = combineReducers({
    apples: ReducerApples,
    applesActive: ReducerApplesActive
});

export default allReducers
