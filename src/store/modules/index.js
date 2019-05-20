import { combineReducers } from 'redux';
import { default as reducer } from 'redux-csrf';
import loginReducer from './loginReducer';
import personalInputReducer from './personalInputReducer';

export default combineReducers({
    loginReducer,
    personalInputReducer,
    _csrf: reducer,
});