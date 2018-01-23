import { combineReducers } from 'redux';
import todoList from './todoList';
import counter from './counter';

const rootReducer = combineReducers({
    todoList,
    counter
});

export default rootReducer