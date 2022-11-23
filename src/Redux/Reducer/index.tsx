import { combineReducers } from 'redux';
import authReducer from './Reducer';
export default combineReducers({ auth: authReducer })