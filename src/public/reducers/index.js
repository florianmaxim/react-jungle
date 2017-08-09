import {combineReducers} from 'redux';
import ReducerApples       from './reducer-apples';
import ReducerAppleActive from './reducer-apple-active';

const allReducers = combineReducers({
    apples: ReducerApples,
    appleActive: ReducerAppleActive
});

export default allReducers
