import { combineReducers } from 'redux';
import login from './login';
import personalInputReducer from './personalInputReducer';
import contactReducer from './contactReducer';
import developInputReducer from './developInputReducer';
import experienceInputReducer from './experienceInputReducer';

export default combineReducers({
    login, personalInputReducer,
    contactReducer, 
    developInputReducer, 
    experienceInputReducer
});